import Papa from 'papaparse';
import PDFDocument from 'pdfkit';

export const buildCsv = (rows, columns) => {
  const data = rows.map((row) => {
    const record = {};
    columns.forEach(({ key, header, mapper }) => {
      const value = mapper ? mapper(row[key], row) : row[key];
      record[header] = value ?? '';
    });
    return record;
  });

  return Papa.unparse(data, { header: true });
};

export const streamPdf = (res, title, rows, columns) => {
  const doc = new PDFDocument({ margin: 40, size: 'A4' });
  doc.pipe(res);

  doc.fontSize(18).text(title, { align: 'center' });
  doc.moveDown();

  const tableWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;
  const columnWidths = columns.map(() => tableWidth / columns.length);

  const drawRow = (values, isHeader = false) => {
    const y = doc.y;
    values.forEach((value, index) => {
      const width = columnWidths[index];
      doc.font(isHeader ? 'Helvetica-Bold' : 'Helvetica')
        .fontSize(10)
        .text(value, { width, continued: index !== values.length - 1 });
    });
    doc.text('');
    doc.moveDown(0.4);
    if (isHeader) {
      doc.moveTo(doc.page.margins.left, y + 14)
        .lineTo(doc.page.width - doc.page.margins.right, y + 14)
        .stroke();
    }
  };

  drawRow(columns.map(({ header }) => header), true);

  rows.forEach((row) => {
    const values = columns.map(({ key, mapper }) => {
      const value = mapper ? mapper(row[key], row) : row[key];
      return value === undefined || value === null ? '' : String(value);
    });
    drawRow(values);
    if (doc.y > doc.page.height - doc.page.margins.bottom - 40) {
      doc.addPage();
    }
  });

  doc.end();
};
