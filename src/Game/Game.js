import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Footer from "../Footer/Footer";
// https://github.com/robatron/sudoku.js, MIT licence
import { sudoku } from "../sudokuRobatronGithub";

const Game = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);

  const loadSudokuData = () => {
    let sudokuGenerator = sudoku.board_string_to_grid(sudoku.generate("easy"));
    let first = Array(
      sudokuGenerator[0]
        .slice(0, 3)
        .concat(sudokuGenerator[1].slice(0, 3), sudokuGenerator[2].slice(0, 3))
    );
    let second = Array(
      sudokuGenerator[0]
        .slice(3, 6)
        .concat(sudokuGenerator[1].slice(3, 6), sudokuGenerator[2].slice(3, 6))
    );
    let third = Array(
      sudokuGenerator[0]
        .slice(6, 9)
        .concat(sudokuGenerator[1].slice(6, 9), sudokuGenerator[2].slice(6, 9))
    );
    let fourth = Array(
      sudokuGenerator[3]
        .slice(0, 3)
        .concat(sudokuGenerator[4].slice(0, 3), sudokuGenerator[5].slice(0, 3))
    );
    let fifth = Array(
      sudokuGenerator[3]
        .slice(3, 6)
        .concat(sudokuGenerator[4].slice(3, 6), sudokuGenerator[5].slice(3, 6))
    );
    let sixth = Array(
      sudokuGenerator[3]
        .slice(6, 9)
        .concat(sudokuGenerator[4].slice(6, 9), sudokuGenerator[5].slice(6, 9))
    );
    let seventh = Array(
      sudokuGenerator[6]
        .slice(0, 3)
        .concat(sudokuGenerator[7].slice(0, 3), sudokuGenerator[8].slice(0, 3))
    );
    let eightth = Array(
      sudokuGenerator[6]
        .slice(3, 6)
        .concat(sudokuGenerator[7].slice(3, 6), sudokuGenerator[8].slice(3, 6))
    );
    let nineth = Array(
      sudokuGenerator[6]
        .slice(6, 9)
        .concat(sudokuGenerator[7].slice(6, 9), sudokuGenerator[8].slice(6, 9))
    );
    let sudokuResult = Array(
      first.concat(
        second,
        third,
        fourth,
        fifth,
        sixth,
        seventh,
        eightth,
        nineth
      )
    );
    console.log(first);
    console.log(sudokuResult);
    return sudokuResult;
  };
  const [sudokuData, setsudokuData] = useState(() => loadSudokuData());

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const newGameActions = () => {
    setTime(0);
    setRunning(true);
    setsudokuData(loadSudokuData());
  };

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
          <div className="sudoku">
            <p className="sudoku__timer">
              <span className="hours">
                {("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:
              </span>
              <span className="minutes">
                {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
              </span>
              <span className="seconds">
                {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
              </span>
            </p>
            <div className="sudoku__timer__buttons">
              {!running && (
                <button
                  className="sudoku__timer__buttons__button"
                  onClick={() => setRunning(true)}
                >
                  Resume
                </button>
              )}
              {running && (
                <button
                  className="sudoku__timer__buttons__button"
                  onClick={() => setRunning(false)}
                >
                  Stop
                </button>
              )}
              <button
                className="sudoku__timer__buttons__button"
                onClick={() => newGameActions()}
              >
                New Game
              </button>
              <button className="sudoku__timer__buttons__button">Check</button>
            </div>
            <div className="sudoku__box">
              <div className="sudoku__box__3x3">
                {sudokuData[0][0].map((data) => {
                  if (data === ".") {
                    data = "🤯";
                    return (
                      <input
                        className="sudoku__box__3x3__one"
                        type="text"
                        maxLength={1}
                        style={{ fontWeight: "bold" }}
                      ></input>
                    );
                  } else {
                    return <div className="sudoku__box__3x3__one">{data}</div>;
                  }
                })}
              </div>
              <div className="sudoku__box__3x3">
                {sudokuData[0][1].map((data) => {
                  if (data === ".") {
                    data = "🤯";
                    return (
                      <input
                        className="sudoku__box__3x3__one"
                        type="text"
                        maxLength={1}
                        style={{ fontWeight: "bold" }}
                      ></input>
                    );
                  } else {
                    return <div className="sudoku__box__3x3__one">{data}</div>;
                  }
                })}
              </div>
              <div className="sudoku__box__3x3">
                {sudokuData[0][2].map((data) => {
                  if (data === ".") {
                    data = "🤯";
                    return (
                      <input
                        className="sudoku__box__3x3__one"
                        type="text"
                        maxLength={1}
                        style={{ fontWeight: "bold" }}
                      ></input>
                    );
                  } else {
                    return <div className="sudoku__box__3x3__one">{data}</div>;
                  }
                })}
              </div>
              <div className="sudoku__box__3x3">
                {sudokuData[0][3].map((data) => {
                  if (data === ".") {
                    data = "🤯";
                    return (
                      <input
                        className="sudoku__box__3x3__one"
                        type="text"
                        maxLength={1}
                        style={{ fontWeight: "bold" }}
                      ></input>
                    );
                  } else {
                    return <div className="sudoku__box__3x3__one">{data}</div>;
                  }
                })}
              </div>
              <div className="sudoku__box__3x3">
                {sudokuData[0][4].map((data) => {
                  if (data === ".") {
                    data = "🤯";
                    return (
                      <input
                        className="sudoku__box__3x3__one"
                        type="text"
                        maxLength={1}
                        style={{ fontWeight: "bold" }}
                      ></input>
                    );
                  } else {
                    return <div className="sudoku__box__3x3__one">{data}</div>;
                  }
                })}
              </div>
              <div className="sudoku__box__3x3">
                {sudokuData[0][5].map((data) => {
                  if (data === ".") {
                    data = "🤯";
                    return (
                      <input
                        className="sudoku__box__3x3__one"
                        type="text"
                        maxLength={1}
                        style={{ fontWeight: "bold" }}
                      ></input>
                    );
                  } else {
                    return <div className="sudoku__box__3x3__one">{data}</div>;
                  }
                })}
              </div>
              <div className="sudoku__box__3x3">
                {sudokuData[0][6].map((data) => {
                  if (data === ".") {
                    data = "🤯";
                    return (
                      <input
                        className="sudoku__box__3x3__one"
                        type="text"
                        maxLength={1}
                        style={{ fontWeight: "bold" }}
                      ></input>
                    );
                  } else {
                    return <div className="sudoku__box__3x3__one">{data}</div>;
                  }
                })}
              </div>
              <div className="sudoku__box__3x3">
                {sudokuData[0][7].map((data) => {
                  if (data === ".") {
                    data = "🤯";
                    return (
                      <input
                        className="sudoku__box__3x3__one"
                        type="text"
                        maxLength={1}
                        style={{ fontWeight: "bold" }}
                      ></input>
                    );
                  } else {
                    return <div className="sudoku__box__3x3__one">{data}</div>;
                  }
                })}
              </div>
              <div className="sudoku__box__3x3">
                {sudokuData[0][8].map((data) => {
                  if (data === ".") {
                    data = "🤯";
                    return (
                      <input
                        className="sudoku__box__3x3__one"
                        type="text"
                        maxLength={1}
                        style={{ fontWeight: "bold" }}
                      ></input>
                    );
                  } else {
                    return <div className="sudoku__box__3x3__one">{data}</div>;
                  }
                })}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Game;
