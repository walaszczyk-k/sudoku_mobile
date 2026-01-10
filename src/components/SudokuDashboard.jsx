import React from "react";

const SudokuDashboard = ({
  sudokuData,
  sudokuCurrent,
  running,
  sudokuChecker,
  isChecked,
  handleChange,
}) => {
  const renderCell = (value, index) => {
    const isUserCell = sudokuData[index] === ".";
    if (!isUserCell) {
      return (
        <div key={index} className="sudoku__box__cell">
          {value}
        </div>
      );
    }
    const isEmpty = value === ".";
    const inputValue = isEmpty ? "" : value;

    const backgroundColor =
      !running && isChecked && !sudokuChecker[index] ? "red" : "transparent";

    return (
      <input
        key={index}
        className="sudoku__box__cell"
        type="text"
        maxLength={1}
        value={inputValue}
        disabled={!running}
        style={{
          background: backgroundColor,
          textAlign: "center",
        }}
        onChange={(e) => {
          const val = e.target.value;
          if (/^[1-9]?$/.test(val)) {
            handleChange(index, val || ".");
          }
        }}
      />
    );
  };

  return <>{sudokuCurrent.map(renderCell)}</>;
};

export default SudokuDashboard;
