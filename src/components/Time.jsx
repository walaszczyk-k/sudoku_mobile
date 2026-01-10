import React from "react";

const Time = ({ time }) => {
  const format = (value) => String(value).padStart(2, "0");

  const hours = format(Math.floor((time / 3600000) % 60));
  const minutes = format(Math.floor((time / 60000) % 60));
  const seconds = format(Math.floor((time / 1000) % 60));

  return (
    <p className="timer__time">
      <span>{hours}</span>
      <span>:</span>
      <span>{minutes}</span>
      <span>:</span>
      <span className="seconds">{seconds}</span>
    </p>
  );
};

export default Time;

// przeniesienie formattera do utils/formatTime.js
// React.memo(Time) (render co 10 ms → realna oszczędność)
// obsługa czasu > 60h (jeśli planujesz maratony)