import React, { useContext } from "react";
import { GameSettingsContext } from "../contexts/GameSettings";
import Header from "../components/Header";

const SeettingsPage = () => {
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
    localStorage.setItem("lsUsername", username);
  };
  const handlePossibleCheckNumberChange = (event) => {
    let checkNum = event.target.value;
    setPossibleCheckNumber(checkNum);
    localStorage.setItem("lsCheckNum", checkNum);
  };
  const difficulty_level = [
    "easy",
    "medium",
    "hard",
    "very-hard",
    "insane",
    "inhuman",
  ];
  return (
    <>
      <section
        className="main"
        style={{ overflow: "hidden", height: "100dvh" }}
      >
        <Header />
        <div className="main__content_container">
          <h2 className="main__content_container__header">Settings</h2>

          <div className="main__content_container__box">
            <h3 className="main__content_container__box__header">
              Difficulty Level
            </h3>
            <div className="main__content_container__box__select_container">
              <select value={difficulty} onChange={handleDifficultyChange}>
                {difficulty_level.map((level, idx) => {
                  return (
                    <option value={level} key={idx}>
                      {level}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="main__content_container__box">
            <h3 className="main__content_container__box__header">User name</h3>
            <div className="main__content_container__box__select_container">
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Enter username"
              />
            </div>
          </div>
          <div className="main__content_container__box">
            <h3 className="main__content_container__box__header">
              Maximum check number
            </h3>
            <div className="main__content_container__box__select_container">
              <input
                type="text"
                pattern="\d*"
                maxLength={2}
                value={possibleCheckNumber}
                onChange={handlePossibleCheckNumberChange}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SeettingsPage;
