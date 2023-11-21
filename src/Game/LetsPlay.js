import React from "react";
import { Link } from "react-router-dom";

import Footer from "../Footer/Footer";

const LetsPlay = () => {
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
            <h2 className="home__box__modal__header">
              For a moment you're starting a new game.
            </h2>
            <p className="home__box__modal__p">Are you ready??</p>
            <Link
              className="reset_link home__box__modal__choice_btn"
              to="/game"
            >
              Yes
            </Link>
            <Link className="reset_link home__box__modal__choice_btn" to="/">
              No, I am not ready
            </Link>
            <Link
              className="reset_link home__box__modal__choice_btn"
              to="/how-to-play"
            >
              How to play?
            </Link>
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default LetsPlay;
