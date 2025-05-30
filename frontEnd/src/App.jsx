import { useState } from "react";
import Header from "./components/Header";

import "./App.css";
import Offers from "./components/Offers";
import Sliders from "./components/Slider";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Offers />
      <Sliders />
      <Packages />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
