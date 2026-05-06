import { ReactNode } from "react";
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
      <Footer />
    </>
  );
};

export default Layout;
