import React from "react";
import Navbar from "../utils/Navbar";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* <Navbar /> */}
      <div className="flex flex-1 overflow-hidden pt-16 pb-16">
        <main className="flex-1 overflow-y-auto p-4">
          {children}``
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;