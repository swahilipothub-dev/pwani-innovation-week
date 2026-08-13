import { ReactNode } from "react";
import { Download, FileText } from "lucide-react";
import Navbar from '@/layout/Navbar.tsx';
import Footer from '@/layout/Footer.tsx';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>

      <div className="bg-[#fbf9f6] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-[#0a1628]">
            <div className="absolute inset-0">
              <img src="/images/new/download (6).jpg" alt="" className="h-full w-full object-cover opacity-25" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/95 to-[#0a1628]/70" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 border-[18px] border-[#F97316]/15" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-8 px-8 py-12 sm:px-12 sm:py-14">
              <div className="flex-shrink-0 h-14 w-14 bg-[#F97316] flex items-center justify-center">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3">PIW 2026 · Concept Note</p>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-4">
                  Get the Full Picture Behind PIW 2026
                </h3>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-2xl">
                  Dive into the objectives, thematic tracks, and ten-year vision driving this milestone edition — download the official concept note.
                </p>
              </div>
              <a
                href="/files/PIW 2026 CONCEPT NOTE.pdf"
                download
                className="flex-shrink-0 inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-sm px-6 py-3.5 transition-all duration-200 hover:shadow-lg hover:shadow-[#F97316]/25 hover:-translate-y-0.5 whitespace-nowrap"
              >
                <Download size={16} /> Download Concept Note
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Layout;
