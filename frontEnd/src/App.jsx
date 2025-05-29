import { useState } from "react";
import Header from "./components/Header";

import "./App.css";
import Offers from "./components/Offers";
import Sliders from "./components/Slider";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Offers />
      <Sliders />
      <Packages />
      <Testimonials />
    </>
  );
}

export default App;
