const TimerControl = (props) => {
  return (
    <>
      <div className="timer__buttons">
        {!props.running ? (
          <button
            className="timer__buttons__button reset_link"
            onClick={() => {
              props.setRunning(true);
              props.setIsChecked(false);
            }}
          >
            Resume
          </button>
        ) : (
          <button
            className="timer__buttons__button reset_link"
            onClick={() => props.setRunning(false)}
          >
            Stop
          </button>
        )}
        <button
          className="timer__buttons__button reset_link"
          onClick={() => props.newGameActions()}
        >
          New Game
        </button>
        {!props.possibleCheckNum ? (
          <button
            className="timer__buttons__button reset_link button_disabled"
            onClick={() => props.checkGame()}
            disabled
          >
            Check (0)
          </button>
        ) : (
          <button
            className="timer__buttons__button reset_link"
            onClick={() => props.checkGame()}
          >
            Check ({props.possibleCheckNum})
          </button>
        )}
      </div>
    </>
  );
};

export default TimerControl;
