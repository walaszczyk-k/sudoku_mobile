import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GameSettingsProvider } from './GameSettings/GameSettings';

import "./style/style.css";
import Home from "./Home/Home";
import LetsPlay from "./OtherPages/LetsPlay";
import HowToPlay from "./OtherPages/HowToPlay";
import Game from "./Game/Game";
import Settings from "./OtherPages/Settings";
import Dashboard from "./OtherPages/Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // turned off strict mode temporarly
  // <React.StrictMode>
  <GameSettingsProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/before-game" element={<LetsPlay />}></Route>
        <Route path="/how-to-play" element={<HowToPlay />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/game" element={<Game />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  </GameSettingsProvider>
  // </React.StrictMode>
);
