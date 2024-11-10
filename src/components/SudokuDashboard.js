const SudokuDashboard = (props) => {
  return (
    <>
      {props.sudokuData.map((number, index) => {
        if (number === ".") {
          if (props.running) {
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
          } else {
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
        } else {
          return <div className="sudoku__box__cell">{number}</div>;
        }
      })}
    </>
  );
};

export default SudokuDashboard;
