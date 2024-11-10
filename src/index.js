import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GameSettingsProvider } from './contexts/GameSettings';

import "./style/style.css";
import HomePage from "./pages/HomePage";
import HowToPlayPage from "./pages/HowToPlayPage";
import SeettingsPage from "./pages/SettingsPage";
import DashboardPage from "./pages/DashboardPage";
import LetsPlayPage from "./pages/LetsPlayPage";
import GamePage from "./pages/GamePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // turned off strict mode temporarly
  // <React.StrictMode>
  <GameSettingsProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/before-game" element={<LetsPlayPage />}></Route>
        <Route path="/how-to-play" element={<HowToPlayPage />}></Route>
        <Route path="/settings" element={<SeettingsPage />}></Route>
        <Route path="/game" element={<GamePage />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
      </Routes>
    </Router>
  </GameSettingsProvider>
  // </React.StrictMode>
);
