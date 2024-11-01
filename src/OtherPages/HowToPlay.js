import React from "react";
import { Link } from "react-router-dom";


const HowToPlay = () => {
  return (
    <>
      <section className="home" style={{ overflow: "auto" }}>
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
                Firstly - what is Sudoku
              </h3>
              <p className="home__box__article__box__content">
              Sudoku is a logic-based, number-placement puzzle played on a 9x9 grid divided
              into nine smaller 3x3 sub-grids or "boxes."
              </p>
              <p className="home__box__article__box__content">
              Each puzzle begins with some numbers
              already filled in, known as "givens," and the objective is to fill in the
              remaining empty cells so that each row, column, and 3x3 sub-grid contains all
              numbers from 1 to 9 exactly once.
              </p>
              <h3 className="home__box__article__box__header">
                How to start?
              </h3>
              <p className="home__box__article__box__content">
              To get started, it helps to begin with the rows, columns, or 3x3 boxes that contain
              the most numbers. Look for the most populated areas of the grid since they offer more
              clues and make it easier to deduce the missing numbers. For instance, if a row already
              contains the numbers 1 through 7, it's easier to determine which numbers are missing and
              where they might fit based on the rules.
              </p>
              <h3 className="home__box__article__box__header">
                Common advice and warning
              </h3>
              <p className="home__box__article__box__content">
              Finally, while Sudoku requires patience and attention to detail, it’s important to resist guessing.
              Every move should be made with confidence that it’s the only option for that cell. Guessing can
              quickly lead to errors that are hard to trace back, complicating the puzzle. By relying on logic and
              consistency, you'll build a steady path toward the solution, whether you're a beginner working through
              the basics or an advanced player using sophisticated strategies. With practice, you'll become more
              adept at spotting patterns and solving even the most challenging puzzles systematically and efficiently.
              </p>
              <h3 className="home__box__article__box__header">
                Set your difficult level
              </h3>
              <p className="home__box__article__box__content">
              Remember that you can always adjust the difficulty level of the game. The default level is set to medium.
              Reducing the level will allow for a more enjoyable game and time to familiarize yourself with the
              specifics of sudoku. To change the difficulty level go to
                <Link to="/settings" style={{fontSize: "1.6rem"}}> settings</Link>
            . Enjoy the game!
            </p>
          </div>
        </article>
      </div>
    </section>
    </>
  );
};

export default HowToPlay;
