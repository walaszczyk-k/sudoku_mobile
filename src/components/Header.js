import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      {props.isHomePage ? (
        <div>
          <h1 className="header__logo header__logo--home_page">
            Sudoku
            <span className="header__logo--span header__logo--span--home_page">
              game
            </span>
          </h1>
        </div>
      ) : props.isGamePage ? (
        <div className="header" style={{ width: "auto"}}>
          <Link className="reset_link" to="/">
            <h1 className="header__logo">
              Sudoku<span className="header__logo--span">game</span>
            </h1>
          </Link>
        </div>
      ) : (
        <div className="header">
          <Link className="reset_link" to="/">
            <h1 className="header__logo">
              Sudoku<span className="header__logo--span">game</span>
            </h1>
          </Link>
        </div>
      )
    }
    </>
  );
};

Header.defaultProps = {
  isHomePage: false,
  isGamePage: false,
};

export default Header;
