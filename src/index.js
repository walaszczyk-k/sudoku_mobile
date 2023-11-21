import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./style/style.css";
import Home from "./Home/Home";
import LetsPlay from "./Game/LetsPlay";
import HowToPlay from "./Game/HowToPlay";
import Game from "./Game/Game";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // turned off strict mode temporarly
  // <React.StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/before-game" element={<LetsPlay />}></Route>
      <Route path="/how-to-play" element={<HowToPlay />}></Route>
      <Route path="/game" element={<Game />}></Route>
    </Routes>
  </Router>
  // </React.StrictMode>
);
