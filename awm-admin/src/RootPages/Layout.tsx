import React from "react";
import Navbar from "../utils/Navbar";  // Your existing Navbar component
import Footer from "./Footer";  // Your Footer component (you may need to create one if not already created)
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;  // This represents the page content that will change
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>  {/* Page content */}
      <Footer />
    </div>
  );
};
export default Layout;
