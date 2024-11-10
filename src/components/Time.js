const Time = (props) => {
  return (
    <>
      <p className="timer__time">
        <span>{("0" + Math.floor((props.time / 3600000) % 60)).slice(-2)}</span>
        <span>:</span>
        <span>{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}</span>
        <span>:</span>
        <span className="seconds">
          {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}
        </span>
      </p>
    </>
  );
};

export default Time;
