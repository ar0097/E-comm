import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Deals from "@/components/Todaysdeals/Deals";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <Deals />
      <Footer />
    </div>
  );
}

export default page;
