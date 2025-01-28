import React from "react";
import Navbar from "./Compenents/Navbar";
import Home from "./Compenents/Home";
import Keunggulan from "./Compenents/keunggulan";
import Product_Unggulan from "./Compenents/Product_Unggulan";
import Ulasan from "./Compenents/Ulasan";
import Cta from "./Compenents/Cta";
import Footer from "./Compenents/Footer";
const App = () => {
  return (
    <div className="font-poppins text-gray-800 h-[3000px]">
      <Navbar />
      <Home />
      <Keunggulan />
      <Product_Unggulan />
      <Ulasan />
      <Cta />
      <Footer />
    </div>
  );
};

export default App;
