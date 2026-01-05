import React from "react";
import { Link } from "react-router-dom";

const BUTTONS = [
  { to: "/before-game", label: "Let's play!" },
  { to: "/how-to-play", label: "How to play" },
  { to: "/settings", label: "Settings" },
  { to: "/dashboard", label: "Dashboard" },
];

const HomeButtons = () => {
  return (
    <div className="home_buttons">
      {BUTTONS.map(({ to, label }) => (
        <Link key={to} className="reset_link home_buttons__btn" to={to}>
          {label}
        </Link>
      ))}
    </div>
  );
};

export default React.memo(HomeButtons);
