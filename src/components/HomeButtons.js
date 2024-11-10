import { Link } from "react-router-dom";

const HomeButtons = () => {
  return (
    <>
      <div className="home_buttons">
        <Link className="reset_link home_buttons__btn" to={"/before-game"}>
          Let's play!
        </Link>
        <Link className="reset_link home_buttons__btn" to={"/how-to-play"}>
          How to play
        </Link>
        <Link className="reset_link home_buttons__btn" to={"/settings"}>
          Settings
        </Link>
        <Link className="reset_link home_buttons__btn" to={"/dashboard"}>
          Dashboard
        </Link>
      </div>
    </>
  );
};

export default HomeButtons;
