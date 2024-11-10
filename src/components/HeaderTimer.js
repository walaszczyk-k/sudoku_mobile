import Time from "./Time";
import TimerControl from "./TimerControl";

const HeaderTimer = (props) => {
  return (
    <>
      <div className="timer">
        <Time time={props.time} />
        <TimerControl
          running={props.running}
          setRunning={props.setRunning}
          setIsChecked={props.setIsChecked}
          newGameActions={props.newGameActions}
          checkGame={props.checkGame}
          possibleCheckNum={props.possibleCheckNum}
        />
      </div>
    </>
  );
};

export default HeaderTimer;
