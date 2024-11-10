import { Link } from "react-router-dom";

const WinnerModal = (props) => {
  return (
    <>
      <div
        className="modal"
        style={{ backgroundColor: "rgba(161, 241, 42, 0.927)" }}
      >
        <h2 className="modal__header">Gratulation {props.username}!</h2>
        <div className="modal__box">
          <div className="modal__box__info">
            <p className="modal__box__info__p">You win!!!</p>
            <p className="modal__box__info__p">
              Your time:
              {("0" + Math.floor((props.time / 3600000) % 60)).slice(-2) +
                ":" +
                ("0" + Math.floor((props.time / 60000) % 60)).slice(-2) +
                ":" +
                ("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}
            </p>
            <p className="modal__box__info__p">
              Move number: {props.moveNumber}
            </p>
          </div>
          <div className="modal__box__info">
            <p className="modal__box__info__p">New game settings</p>
            <p className="modal__box__info__p">
              difficulty level: {props.difficulty}
            </p>
            <p className="modal__box__info__p">
              max. check number: {props.possibleCheckNumber}
            </p>
          </div>
          <div className="modal__box__links">
            <Link
              className="modal__box__links__link reset_link"
              to="/game"
              onClick={() => props.newGameActions()}
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
    </>
  );
};

export default WinnerModal;
