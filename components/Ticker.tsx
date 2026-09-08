const ITEMS = ["Emerging Tech", "Blue & Green Economy", "Climate Action", "Creative Economy", "Peace, Inclusivity & Equity", "Participatory Governance"];
export default function Ticker() {
  const row = (
    <span className="flex gap-10 pr-10 whitespace-nowrap">
      {ITEMS.map(i => (<span key={i} className="flex gap-10"><span>{i}</span><span className="text-orange">✦</span></span>))}
    </span>
  );
  return (
    <div className="border-y border-line overflow-hidden bg-white py-3.5 mt-10">
      <div className="flex w-max animate-ticker font-display font-semibold text-[15px] tracking-tight text-slate-700">{row}{row}</div>
    </div>
  );
}
