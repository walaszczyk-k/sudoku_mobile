import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GameSettingsContext } from "../contexts/GameSettings";
import Header from "../components/Header";

const LetsPlayPage = () => {
  const { difficulty, username, possibleCheckNumber } = useContext(GameSettingsContext);
  return (
    <>
      <section className="main" style={{ overflow: "hidden", height: "100dvh" }}>
        <Header/>
        <div className="modal">
          <h2 className="modal__header">New game settings</h2>
          <div className="modal__box">
            <div className="modal__box__info">
              <p className="modal__box__info__p">difficulty level: {difficulty}</p>
              <p className="modal__box__info__p">username: {username}</p>
              <p className="modal__box__info__p">max. check number: {possibleCheckNumber}</p>
            </div>
            <div className="modal__box__links">
              <Link className="modal__box__links__link reset_link" to="/game">Start</Link>
              <Link className="modal__box__links__link reset_link" to="/settings">Settings</Link>
              <Link className="modal__box__links__link reset_link" to="/">Back to main menu</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LetsPlayPage;
