import React from "react";
import { Link } from "react-router-dom";

import Footer from "../Footer/Footer";
// import Header from "../Header/Header";

const Home = () => {
  return (
    <>
      <section className="home">
        {Array.from({ length: 12 }, (v, k) => k + 1).map((idx) => {
          return <div className="box-animated" id={idx}></div>;
        })}
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
              <Link
                className="reset_link home__box__btns__btn"
                to={"/settings"}
              >
                Settings
              </Link>
              <Link
                className="reset_link home__box__btns__btn"
                to={"/dashboard"}
              >
                Dashboard
              </Link>
            </div>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Home;
