import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/style.css";

import { GameSettingsProvider } from "./contexts/GameSettings.jsx";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const HowToPlayPage = lazy(() => import("./pages/HowToPlayPage.jsx"));
const SettingsPage = lazy(() => import("./pages/SettingsPage.jsx"));
const DashboardPage = lazy(() => import("./pages/DashboardPage.jsx"));
const LetsPlayPage = lazy(() => import("./pages/LetsPlayPage.jsx"));
const GamePage = lazy(() => import("./pages/GamePage.jsx"));

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/before-game", element: <LetsPlayPage /> },
  { path: "/how-to-play", element: <HowToPlayPage /> },
  { path: "/settings", element: <SettingsPage /> },
  { path: "/game", element: <GamePage /> },
  { path: "/dashboard", element: <DashboardPage /> },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  // turned off strict mode temporarly
  // <React.StrictMode>
  <GameSettingsProvider>
    <Router>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            Loading...
          </div>
        }
      >
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
    </Router>
  </GameSettingsProvider>
  // </React.StrictMode>
);
