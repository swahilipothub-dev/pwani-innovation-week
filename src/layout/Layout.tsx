import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Navbar from '@/layout/Navbar.tsx';
import Footer from '@/layout/Footer.tsx';
import useScrollReveal from '@/hooks/useScrollReveal.ts';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  useScrollReveal(location.pathname);

  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground transition-colors duration-300">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
