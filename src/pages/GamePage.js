import React, { useContext, useEffect, useState } from "react";
// https://github.com/robatron/sudoku.js, MIT licence
import { sudoku } from "../sudokuRobatronGithub";
import { GameSettingsContext } from "../contexts/GameSettings";
import Header from "../components/Header";
import HeaderTimer from "../components/HeaderTimer";
import SudokuDashboard from "../components/SudokuDashboard";
import WinnerModal from "../components/WinnerModal";

const GamePage = () => {
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
  const [moveNumber, setMoveNumber] = useState(0);

  const loadSudokuData = () => {
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
    setMoveNumber(moveNumber + 1);
    setSudokuChecker(
      sudokuResults.map((element, index) => element === sudokuCurrent[index])
    );
  }, [sudokuCurrent]);

  useEffect(() => {
    // waiting for winner
    if (sudokuChecker.length > 0 && !sudokuChecker.includes(false)) {
      setIsWinner(true);
      setRunning(false);
      // TODO: check_number na score
      const currentResults = {
        username: username,
        difficulty_level: difficulty,
        check_number: possibleCheckNum,
        time:
          ("0" + Math.floor((time / 3600000) % 60)).slice(-2) +
          ":" +
          ("0" + Math.floor((time / 60000) % 60)).slice(-2) +
          ":" +
          ("0" + Math.floor((time / 1000) % 60)).slice(-2),
      };
      let lsResults = JSON.parse(localStorage.getItem("lsResults"));
      lsResults = lsResults == null ? [] : lsResults;
      lsResults.push(currentResults);
      localStorage.setItem("lsResults", JSON.stringify(lsResults));
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
    setMoveNumber(0);
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
      <section
        className="main"
        style={{ overflow: "hidden", height: "100dvh" }}
      >
        <div className="header_game">
          <Header isGamePage="true" />
          <HeaderTimer
            running={running}
            time={time}
            setRunning={setRunning}
            setIsChecked={setIsChecked}
            newGameActions={newGameActions}
            checkGame={checkGame}
            possibleCheckNum={possibleCheckNum}
          />
        </div>
        <div className="sudoku">
          <div className="sudoku__box">
            <SudokuDashboard
              sudokuData={sudokuData}
              running={running}
              sudokuChecker={sudokuChecker}
              isChecked={isChecked}
              handleChange={handleChange}
            />
          </div>
          {isWinner && (
            <WinnerModal
              username={username}
              difficulty={difficulty}
              time={time}
              moveNumber={moveNumber}
              possibleCheckNumber={possibleCheckNumber}
              newGameActions={newGameActions}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default GamePage;
