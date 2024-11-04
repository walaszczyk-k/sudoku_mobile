import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GameSettingsContext } from "../GameSettings/GameSettings";

const Settings = () => {
  const {
    difficulty,
    setDifficulty,
    username,
    setUsername,
    possibleCheckNumber,
    setPossibleCheckNumber,
  } = useContext(GameSettingsContext);
  const handleDifficultyChange = (event) => {
    let gameLevel = event.target.value;
    setDifficulty(gameLevel);
    localStorage.setItem("lsGameLevel", gameLevel);
  };
  const handleUsernameChange = (event) => {
    let username = event.target.value;
    setUsername(username);
    localStorage.setItem("lsUsername", username)
  };
  const handlePossibleCheckNumberChange = (event) => {
    let checkNum = event.target.value;
    setPossibleCheckNumber(checkNum);
    localStorage.setItem("lsCheckNum", checkNum)
  };

  return (
    <>
      <section className="home" style={{ overflow: "auto" }}>
        <div className="home__box home__box--not_main">
          <Link
            className="reset_link home__box__header home__box__header--not_main"
            to="/"
          >
            <h1 className="home__box__header__h1 home__box__header__h1--not_main">
              Sudoku
              <span className="home__box__header__span home__box__header__span--not_main">
                game
              </span>
            </h1>
          </Link>
          <article className="home__box__article">
            <h2 className="home__box__article__header">Settings</h2>
            <div className="home__box__article__box">
              <h3 className="home__box__article__box__header">
                Difficulty Level
              </h3>
              <div className="home__box__article__box__select_container">
                <select value={difficulty} onChange={handleDifficultyChange}>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                  <option value="very-hard">Very-hard</option>
                  <option value="insane">Insane</option>
                  <option value="inhuman">Inhuman</option>
                </select>
              </div>
              <h3 className="home__box__article__box__header">User name</h3>
              <div className="home__box__article__box__select_container">
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  placeholder="Enter username"
                />
              </div>
              <h3 className="home__box__article__box__header">
                Maximum check number
              </h3>
              <div className="home__box__article__box__select_container">
                <input
                  type="text"
                  pattern="\d*"
                  maxLength={2}
                  value={possibleCheckNumber}
                  onChange={handlePossibleCheckNumberChange}
                />
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Settings;
