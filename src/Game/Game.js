import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Footer from "../Footer/Footer";
// https://github.com/robatron/sudoku.js, MIT licence
import { sudoku } from "../sudokuRobatronGithub";

const Game = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);
  const [sudokuResults, setsudokuResults] = useState([]);
  const [sudokuCurrent, setsudokuCurrent] = useState([]);
  const [sudokuChecker, setSudokuChecker] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const loadSudokuData = () => {
    let sudokuGenerator = sudoku.board_string_to_grid(sudoku.generate("easy"));
    let sudokuDataArray = [].concat(...sudokuGenerator);
    setsudokuCurrent(sudokuDataArray);
    setsudokuResults([].concat(...sudoku.solve(sudokuDataArray)));
    return sudokuDataArray;
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

  const handleChange = (index, event) => {
    const updatedNumbers = [...sudokuCurrent];
    updatedNumbers[index] = event.target.value;
    setsudokuCurrent(updatedNumbers);
  };

  const newGameActions = () => {
    setTime(0);
    setRunning(true);
    setsudokuData(loadSudokuData());
    console.log(sudokuChecker);
  };

  const checkGame = () => {
    setRunning(false);
    setSudokuChecker(
      sudokuResults.map((element, index) => element === sudokuCurrent[index])
    );
    setIsChecked(true);
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
              <button
                className="sudoku__timer__buttons__button"
                onClick={() => checkGame()}
              >
                Check
              </button>
            </div>
            <div className="sudoku__box">
              {sudokuData.map((number, index) => {
                if (number === ".") {
                  if (running) {
                    return (
                      <input
                        className="sudoku__box__cell"
                        type="text"
                        maxLength={1}
                        style={{
                          background:
                            isChecked ||
                            sudokuChecker.length === 0 ||
                            sudokuChecker[index]
                              ? "transparent"
                              : "red",
                          fontWeight: 900,
                        }}
                        onChange={(e) => handleChange(index, e)}
                      ></input>
                    );
                  } else {
                    return (
                      <input
                        className="sudoku__box__cell"
                        type="text"
                        maxLength={1}
                        style={{
                          background:
                            !isChecked ||
                            sudokuChecker.length == !0 ||
                            sudokuChecker[index]
                              ? "transparent"
                              : "red",
                          fontWeight: 900,
                        }}
                        disabled
                      ></input>
                    );
                  }
                } else {
                  return <div className="sudoku__box__cell">{number}</div>;
                }
              })}
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Game;
