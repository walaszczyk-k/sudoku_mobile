import React from "react";

const SudokuDashboard = ({
  sudokuData,
  running,
  sudokuChecker,
  isChecked,
  handleChange,
}) => {
  const renderCell = (value, index) => {
    const isEmpty = value === ".";
    const inputValue = isEmpty ? "" : value;

    // Pole startowe (nieedytowalne)
    if (!isEmpty) {
      return (
        <div key={index} className="sudoku__box__cell">
          {value}
        </div>
      );
    }

    // Kolor po sprawdzeniu
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
          fontWeight: 900,
          textAlign: "center",
          color: "black",
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

  return <>{sudokuData.map(renderCell)}</>;
};

export default SudokuDashboard;
