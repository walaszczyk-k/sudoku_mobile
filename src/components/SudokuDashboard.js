const SudokuDashboard = (props) => {
  return (
    <>
      {props.sudokuData.map((number, index) => {
        if (number !== ".") {
          <div className="sudoku__box__cell" key={index}>
            {number}
          </div>;
        } else if (number === "." && props.running) {
          return (
            <input
              key={index}
              className="sudoku__box__cell"
              type="number"
              maxLength={1}
              style={{
                background: "transparent",
                fontWeight: 900,
                textAlign: "center",
              }}
              onChange={(e) => props.handleChange(index, e)}
            ></input>
          );
        } else if (number === "." && !props.running) {
          let backgroundIdx = props.isChecked
            ? props.sudokuChecker[index]
              ? "transparent"
              : "red"
            : "transparent";
          return (
            <input
              key={index}
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
      })}
    </>
  );
};

export default SudokuDashboard;
