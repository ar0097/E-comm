import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "./Header";
import Productcard from "../Product/Productcard";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Productcard />
      <Footer />
    </div>
  );
}

export default Home;
