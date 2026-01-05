import React from "react";

const TimerControl = ({
  running,
  setRunning,
  setIsChecked,
  newGameActions,
  checkGame,
  possibleCheckNum,
}) => {
  const handleResume = () => {
    setRunning(true);
    setIsChecked(false);
  };

  return (
    <div className="timer__buttons">
      <button
        className="timer__buttons__button reset_link"
        onClick={running ? () => setRunning(false) : handleResume}
      >
        {running ? "Stop" : "Resume"}
      </button>

      <button
        className="timer__buttons__button reset_link"
        onClick={newGameActions}
      >
        New Game
      </button>

      <button
        className={`timer__buttons__button reset_link ${
          !possibleCheckNum ? "button_disabled" : ""
        }`}
        onClick={checkGame}
        disabled={!possibleCheckNum}
      >
        Check ({possibleCheckNum})
      </button>
    </div>
  );
};

export default TimerControl;
