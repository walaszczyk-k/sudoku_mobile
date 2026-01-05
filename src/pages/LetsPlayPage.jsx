import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GameSettingsContext } from "../contexts/GameSettings.jsx";
import Header from "../components/Header.jsx";

const LetsPlayPage = () => {
  const { difficulty, username, possibleCheckNumber } =
    useContext(GameSettingsContext);
  const gameInfo = [
    { label: "Difficulty level", value: difficulty },
    { label: "Username", value: username },
    { label: "Max. check number", value: possibleCheckNumber },
  ];
  const links = [
    { to: "/game", label: "Start" },
    { to: "/settings", label: "Settings" },
    { to: "/", label: "Back to main menu" },
  ];
  return (
    <section className="main" style={{ overflow: "hidden", height: "100dvh" }}>
      <Header />
      <div className="modal">
        <h2 className="modal__header">New game settings</h2>
        <div className="modal__box">
          <div className="modal__box__info">
            {gameInfo.map((item) => (
              <p key={item.label} className="modal__box__info__p">
                {item.label}: {item.value}
              </p>
            ))}
          </div>
          <div className="modal__box__links">
            {links.map((link) => (
              <Link
                key={link.to}
                className="modal__box__links__link reset_link"
                to={link.to}
              >
                {link.label}
              </Link>
               ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsPlayPage;
