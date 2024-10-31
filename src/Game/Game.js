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
        <div className="sudoku_main_page">
          <div className="sudoku_main_page__header">
            <Link className="reset_link sudoku_main_page__header__title" to="/">
              <h1 className="sudoku_main_page__header__title__h1">
                Sudoku
                <span className="sudoku_main_page__header__title__span">game</span>
              </h1>
            </Link>
            <div className="sudoku_main_page__header__timer">
              <p className="sudoku_main_page__header__timer__p">
                <span className="hours">
                  {("0" + Math.floor((time / 3600000) % 60)).slice(-2)}
                </span>
                <span>:</span>
                <span className="minutes">
                  {("0" + Math.floor((time / 60000) % 60)).slice(-2)}
                </span>
                <span>:</span>
                <span className="seconds">
                  {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
                </span>
              </p>
              <div className="sudoku_main_page__header__timer__btns">
                {!running && (
                  <button
                    className="sudoku_main_page__header__timer__btns__btn reset_link"
                    onClick={() => setRunning(true)}
                  >
                    Resume
                  </button>
                )}
                {running && (
                  <button
                    className="sudoku_main_page__header__timer__btns__btn reset_link"
                    onClick={() => setRunning(false)}
                  >
                    Stop
                  </button>
                )}
                <button
                  className="sudoku_main_page__header__timer__btns__btn reset_link"
                  onClick={() => newGameActions()}
                >
                  New Game
                </button>
                <button
                  className="sudoku_main_page__header__timer__btns__btn reset_link"
                  onClick={() => checkGame()}
                >
                  Check
                </button>
              </div>
            </div>
          </div>
          <div className="sudoku_main_page__game">
            <div className="sudoku">
              <div className="sudoku__box">
                {sudokuData.map((number, index) => {
                  if (number === ".") {
                    if (running) {
                      return (
                        <input
                          className="sudoku__box__cell"
                          type="number"
                          maxLength={1}
                          style={{
                            background:
                              isChecked ||
                              sudokuChecker.length === 0 ||
                              sudokuChecker[index]
                                ? "transparent"
                                : "red",
                            fontWeight: 900,
                            textAlign: "center"
                          }}
                          onChange={(e) => handleChange(index, e)}
                        ></input>
                      );
                    } else {
                      return (
                        <input
                          className="sudoku__box__cell"
                          type="number"
                          maxLength={1}
                          style={{
                            background:
                              !isChecked ||
                              sudokuChecker.length == !0 ||
                              sudokuChecker[index]
                                ? "transparent"
                                : "red",
                            fontWeight: 900,
                            textAlign: "center"
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Game;
