import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "./Header";
import Productcard from "../Product/Productcard";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Productcard />
    </div>
  );
}

export default Home;
