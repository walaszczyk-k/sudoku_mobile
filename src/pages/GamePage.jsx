import React, { useContext, useEffect, useState } from "react";
// https://github.com/robatron/sudoku.js, MIT licence
import { GameSettingsContext } from "../contexts/GameSettings.jsx";
import Header from "../components/Header.jsx";
import HeaderTimer from "../components/HeaderTimer.jsx";
import SudokuDashboard from "../components/SudokuDashboard.jsx";
import WinnerModal from "../components/WinnerModal.jsx";

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

  // helpers
  const formatTime = (ms) => {
    const hours = Math.floor((ms / 3600000) % 60);
    const minutes = Math.floor((ms / 60000) % 60);
    const seconds = Math.floor((ms / 1000) % 60);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const loadSudokuData = () => {
    const grid = sudoku.board_string_to_grid(
      window.sudoku.generate(difficulty)
    );
    const sudokuDataArray = [].concat(...grid);
    setSudokuCurrent(sudokuDataArray);
    setSudokuResults([].concat(...window.sudoku.solve(sudokuDataArray)));
    return sudokuDataArray;
  };
  const [sudokuData, setSudokuData] = useState(() => loadSudokuData());

  // timer
  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => setTime((prev) => prev + 10), 10);
    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    setMoveNumber((prev) => prev + 1);
    setSudokuChecker(sudokuResults.map((el, idx) => el === sudokuCurrent[idx]));
  }, [sudokuCurrent]);

  useEffect(() => {
    if (sudokuChecker.length > 0 && !sudokuChecker.includes(false)) {
      setIsWinner(true);
      setRunning(false);

      const currentResults = {
        username,
        difficulty_level: difficulty,
        check_number: possibleCheckNum,
        time: formatTime(time),
      };

      const lsResults = JSON.parse(localStorage.getItem("lsResults")) || [];
      lsResults.push(currentResults);
      localStorage.setItem("lsResults", JSON.stringify(lsResults));
    } else {
      setIsWinner(false);
    }
  }, [sudokuChecker]);

  const handleChange = (index, value) => {
    setSudokuCurrent((prev) => {
      const copy = [...prev];
      copy[index] = value;
      return copy;
    });
    setIsChecked(false);
  };

  const newGameActions = () => {
    setTime(0);
    setRunning(true);
    setIsChecked(false);
    setPossibleCheckNum(possibleCheckNumber);
    setMoveNumber(0);
    setSudokuData(loadSudokuData());
  };

  const checkGame = () => {
    if (running) setPossibleCheckNum((prev) => prev - 1);
    setRunning(false);
    setIsChecked(true);
  };

  return (
    <section className="main" style={{ overflow: "hidden", height: "100dvh" }}>
      <div className="header_game">
        <Header isGamePage={true} />
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
            sudokuData={sudokuCurrent}
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
  );
};

export default GamePage;
