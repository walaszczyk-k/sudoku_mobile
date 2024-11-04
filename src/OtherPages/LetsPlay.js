import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GameSettingsContext } from "../GameSettings/GameSettings";

import Footer from "../Footer/Footer";

const LetsPlay = () => {
  const {
    difficulty,
    username,
    setUsername,
    possibleCheckNumber,
    setPossibleCheckNumber,
  } = useContext(GameSettingsContext);
  if (!username) {
    setUsername("RandomUsername");
  }

  return (
    <>
      <section className="home">
        <div className="home__box home__box--not_main">
          <Link
            className="reset_link home__box__header home__box__header--not_main"
            to="/"
          >
            <h1 className="home__box__header__h1 home__box__header__h1--not_main">
              Sudoku
              <span className="home__box__header__span home__box__header__span--not_main">
                game
              </span>
            </h1>
          </Link>
          <div className="home__box__modal">
            <h2 className="home__box__modal__header">New game settings</h2>
            <div className="home__box__modal__header__box">
              <p className="home__box__modal__header__box__p">
                difficulty level: {difficulty}
              </p>
              <p className="home__box__modal__header__box__p">
                username: {username}
              </p>
              <p className="home__box__modal__header__box__p">
                max. check number: {possibleCheckNumber}
              </p>
            </div>
            <Link
              className="reset_link home__box__modal__choice_btn"
              to="/game"
            >
              Start
            </Link>
            <Link
              className="reset_link home__box__modal__choice_btn"
              to="/settings"
            >
              Settings
            </Link>
            <Link className="reset_link home__box__modal__choice_btn" to="/">
              Back to main menu
            </Link>
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default LetsPlay;
