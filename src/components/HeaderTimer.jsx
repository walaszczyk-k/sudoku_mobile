import React from "react";
import Time from "./Time.jsx";
import TimerControl from "./TimerControl.jsx";

const HeaderTimer = ({
  time,
  running,
  setRunning,
  setIsChecked,
  newGameActions,
  checkGame,
  possibleCheckNum,
}) => {
  return (
    <div className="timer">
      <Time time={time} />
      <TimerControl
        running={running}
        setRunning={setRunning}
        setIsChecked={setIsChecked}
        newGameActions={newGameActions}
        checkGame={checkGame}
        possibleCheckNum={possibleCheckNum}
      />
    </div>
  );
};

export default React.memo(HeaderTimer);
