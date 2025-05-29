import { useState } from "react";
import Header from "./components/Header";

import "./App.css";
import Offers from "./components/Offers";
import Sliders from "./components/Slider";
import Packages from "./components/Packages";

function App() {
  return (
    <>
      <Header />
      <Offers />
      <Sliders />
      <Packages />
    </>
  );
}

export default App;
