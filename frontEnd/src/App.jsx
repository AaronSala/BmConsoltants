import { useState } from "react";
import Header from "./components/Header";

import "./App.css";
import Offers from "./components/Offers";
import Sliders from "./components/Slider";

function App() {
  return (
    <>
      <Header />
      <Offers />
      <Sliders />
    </>
  );
}

export default App;
