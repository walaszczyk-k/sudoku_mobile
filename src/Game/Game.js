import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// https://github.com/robatron/sudoku.js, MIT licence
import { sudoku } from "../sudokuRobatronGithub";
import { GameSettingsContext } from "../GameSettings/GameSettings";

const Game = () => {
  const { difficulty, username, possibleCheckNumber } =
    useContext(GameSettingsContext);
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);
  const [sudokuResults, setSudokuResults] = useState([]);
  const [sudokuCurrent, setSudokuCurrent] = useState([]);
  const [sudokuChecker, setSudokuChecker] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isWinner, setIsWinner] = useState(false);
  const [possibleCheckNum, setPossibleCheckNum] = useState(possibleCheckNumber);

  const loadSudokuData = () => {
    // "easy":         62
    // "medium":       53
    // "hard":         44
    // "very-hard":    35
    // "insane":       26
    // "inhuman":      17
    let sudokuGenerator = sudoku.board_string_to_grid(
      sudoku.generate(difficulty)
    );
    let sudokuDataArray = [].concat(...sudokuGenerator);
    setSudokuCurrent(sudokuDataArray);
    setSudokuResults([].concat(...sudoku.solve(sudokuDataArray)));
    return sudokuDataArray;
  };
  const [sudokuData, setSudokuData] = useState(() => loadSudokuData());

  useEffect(() => {
    // time
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    // check result after move
    setSudokuChecker(
      sudokuResults.map((element, index) => element === sudokuCurrent[index])
    );
  }, [sudokuCurrent]);

  useEffect(() => {
    // waiting for winner
    if (sudokuChecker.length > 0 && !sudokuChecker.includes(false)) {
      setIsWinner(true);
      setRunning(false);
    } else {
      setIsWinner(false);
    }
  }, [sudokuChecker]);

  const handleChange = (index, event) => {
    const updatedNumbers = [...sudokuCurrent];
    updatedNumbers[index] = event.target.value;
    setSudokuCurrent(updatedNumbers);
    setIsChecked(false);
  };

  const newGameActions = () => {
    setTime(0);
    setRunning(true);
    setIsChecked(false);
    setPossibleCheckNum(possibleCheckNumber);
    document.querySelectorAll("input").forEach((element) => {
      element.value = "";
    });

    setSudokuData(loadSudokuData());
  };

  const checkGame = () => {
    if (running) {
      setPossibleCheckNum(possibleCheckNum - 1);
    }
    setRunning(false);
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
                <span className="sudoku_main_page__header__title__span">
                  game
                </span>
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
                    onClick={() => {
                      setRunning(true);
                      setIsChecked(false);
                    }}
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
                {possibleCheckNum > 0 ? (
                  <button
                    className="sudoku_main_page__header__timer__btns__btn reset_link"
                    onClick={() => checkGame()}
                  >
                    Check ({possibleCheckNum})
                  </button>
                ) : (
                  <button
                    className="sudoku_main_page__header__timer__btns__btn reset_link button_disabled"
                    onClick={() => checkGame()}
                    disabled
                  >
                    Check (0)
                  </button>
                )}
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
                            background: "transparent",
                            fontWeight: 900,
                            textAlign: "center",
                          }}
                          onChange={(e) => handleChange(index, e)}
                        ></input>
                      );
                    } else {
                      let backgroundIdx = isChecked
                        ? sudokuChecker[index]
                          ? "transparent"
                          : "red"
                        : "transparent";
                      return (
                        <input
                          className="sudoku__box__cell"
                          type="number"
                          maxLength={1}
                          style={{
                            background: backgroundIdx,
                            color: "black",
                            fontWeight: 900,
                            textAlign: "center",
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
          {isWinner && (
            <>
              <div className="winner_modal">
                <div className="home__box__modal">
                  <h2 className="home__box__modal__header">
                    Gratulation {username}!
                  </h2>
                  <div className="home__box__modal__header__box">
                    <p
                      className="home__box__modal__header__box__p"
                      style={{
                        textAlign: "center",
                        fontWeight: "900",
                        marginBottom: "20px",
                      }}
                    >
                      You win!!!
                    </p>
                    <p className="home__box__modal__header__box__p">
                      Your time:{" "}
                      {("0" +
                        Math.floor((time / 3600000) % 60)).slice(-2) +
                        ":" +
                        ("0" +
                        Math.floor((time / 60000) % 60)).slice(-2) +
                        ":" +
                        ("0" +
                        Math.floor((time / 1000) % 60)).slice(-2)}
                    </p>
                    <p
                      className="home__box__modal__header__box__p"
                      style={{ marginTop: "20px" }}
                    >
                      New game settings
                    </p>
                    <p className="home__box__modal__header__box__p">
                      difficulty level: {difficulty}
                    </p>
                    <p className="home__box__modal__header__box__p">
                      max. check number: {possibleCheckNumber}
                    </p>
                  </div>
                  <Link
                    className="reset_link home__box__modal__choice_btn"
                    to="/game"
                    onClick={() => newGameActions()}
                  >
                    Start
                  </Link>
                  <Link
                    className="reset_link home__box__modal__choice_btn"
                    to="/settings"
                  >
                    Settings
                  </Link>
                  <Link
                    className="reset_link home__box__modal__choice_btn"
                    to="/"
                  >
                    Back to main menu
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Game;
