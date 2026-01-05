import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isGamePage = false, isHomePage = false }) => {
  const Logo = ({ home }) => (
    <h1 className={`header__logo ${home ? "header__logo--home_page" : ""}`}>
      Sudoku
      <span
        className={`header__logo--span ${
          home ? "header__logo--span--home_page" : ""
        }`}
      >
        game
      </span>
    </h1>
  );

  // HOME PAGE (bez linka)
  if (isHomePage) {
    return (
      <div>
        <Logo home />
      </div>
    );
  }

  // GAME PAGE / INNE STRONY (z linkiem)
  return (
    <div className="header" style={isGamePage ? { width: "auto" } : undefined}>
      <Link className="reset_link" to="/">
        <Logo />
      </Link>
    </div>
  );
};

export default React.memo(Header);
