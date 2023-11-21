import React from "react";
import { Link } from "react-router-dom";


const HowToPlay = () => {
  return (
    <>
      <section className="home" style={{ height: "120vh" }}>
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
          <article className="home__box__article">
            <h2 className="home__box__article__header">How to play sudoku?</h2>
            <div className="home__box__article__box">
              <h3 className="home__box__article__box__header">
                Firstly - short history of Sudoku
              </h3>
              <p className="home__box__article__box__content">
                Number puzzles appeared in newspapers in the late 19th century,
                when French puzzle setters began experimenting with removing
                numbers from magic squares. Le Siècle, a Paris daily, published
                a partially completed 9×9 magic square with 3×3 subsquares on
                November 19, 1892. It was not a Sudoku because it contained
                double-digit numbers and required arithmetic rather than logic
                to solve, but it shared key characteristics: each row, column
                and subsquare added up to the same number.
              </p>
              <p className="home__box__article__box__content">
                On July 6, 1895, Le Siècle's rival, La France, refined the
                puzzle so that it was almost a modern Sudoku and named it
                French: carré magique diabolique ('evil magic square'). It
                simplified the 9×9 magic square puzzle so that each row, column,
                and broken diagonals contained only the numbers 1–9, but did not
                mark the subsquares. Although they are unmarked, each 3×3
                subsquare does indeed comprise the numbers 1–9 and the
                additional constraint on the broken diagonals leads to only one
                solution.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default HowToPlay;
