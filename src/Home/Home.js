import React from "react";
import { Link } from "react-router-dom";

import Footer from "../Footer/Footer";
// import Header from "../Header/Header";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="home__box">
          <div className="home__box__header">
            <h1 className="home__box__header__h1">
              Sudoku<span className="home__box__header__span">game</span>
            </h1>
          </div>
          <div className="home__box__btns">
            <Link
              className="reset_link home__box__btns__btn"
              to={"/before-game"}
            >
              Let's play!
            </Link>
            <Link
              className="reset_link home__box__btns__btn"
              to={"/how-to-play"}
            >
              How to play
            </Link>
            <button className="reset_link home__box__btns__btn">Settings</button>
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Home;
