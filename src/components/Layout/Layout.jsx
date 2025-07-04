import React from "react";
import Navbar from "../Layouts/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Layouts/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-[80vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default React.memo(Layout);
