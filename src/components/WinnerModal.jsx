import { Link } from "react-router-dom";
import React, { useMemo } from "react";

const formatTime = (time) => {
  const hh = String(Math.floor((time / 3600000) % 60)).padStart(2, "0");
  const mm = String(Math.floor((time / 60000) % 60)).padStart(2, "0");
  const ss = String(Math.floor((time / 1000) % 60)).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
};

const WinnerModal = ({
  username,
  time,
  moveNumber,
  difficulty,
  possibleCheckNumber,
  newGameActions,
}) => {
  const formattedTime = useMemo(() => formatTime(time), [time]);
  return (
    <div
      className="modal"
      style={{ backgroundColor: "rgba(161, 241, 42, 0.927)" }}
    >
      <h2 className="modal__header">Gratulation {username}!</h2>

      <div className="modal__box">
        <div className="modal__box__info">
          <p className="modal__box__info__p">You win!!!</p>
          <p className="modal__box__info__p">Your time: {formattedTime}</p>
          <p className="modal__box__info__p">Move number: {moveNumber}</p>
        </div>

        <div className="modal__box__info">
          <p className="modal__box__info__p">New game settings</p>
          <p className="modal__box__info__p">difficulty level: {difficulty}</p>
          <p className="modal__box__info__p">
            max. check number: {possibleCheckNumber}
          </p>
        </div>

        <div className="modal__box__links">
          <Link
            className="modal__box__links__link reset_link"
            to="/game"
            onClick={newGameActions}
          >
            Start
          </Link>
          <Link className="modal__box__links__link reset_link" to="/settings">
            Settings
          </Link>
          <Link className="modal__box__links__link reset_link" to="/">
            Back to main menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WinnerModal;
