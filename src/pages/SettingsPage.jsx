import React, { useContext } from "react";
import { GameSettingsContext } from "../contexts/GameSettings.jsx";
import Header from "../components/Header.jsx";

const SettingsPage = () => {
  const {
    difficulty,
    setDifficulty,
    username,
    setUsername,
    possibleCheckNumber,
    setPossibleCheckNumber,
  } = useContext(GameSettingsContext);

  // Helper to change state and localStorage
  const updateSetting = (key, value, setter) => {
    setter(value);
    localStorage.setItem(key, value);
  };
  const difficultyLevels = [
    "easy",
    "medium",
    "hard",
    "very-hard",
    "insane",
    "inhuman",
  ];

  return (
    <section className="main" style={{ overflow: "hidden", height: "100dvh" }}>
      <Header />

      <div className="main__content_container">
        <h2 className="main__content_container__header">Settings</h2>

        {/* Difficulty */}
        <div className="main__content_container__box">
          <h3 className="main__content_container__box__header">
            Difficulty Level
          </h3>
          <div className="main__content_container__box__select_container">
            <select
              value={difficulty}
              onChange={(e) =>
                updateSetting("lsGameLevel", e.target.value, setDifficulty)
              }
              name="level"
            >
              {difficultyLevels.map((level) => (
                <option value={level} key={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Username */}
        <div className="main__content_container__box">
          <h3 className="main__content_container__box__header">User name</h3>
          <div className="main__content_container__box__select_container">
            <input
              type="text"
              id={username}
              value={username}
              onChange={(e) =>
                updateSetting("lsUsername", e.target.value, setUsername)
              }
              placeholder="Enter username"
            />
          </div>
        </div>

        {/* Maximum check number */}
        <div className="main__content_container__box">
          <h3 className="main__content_container__box__header">
            Maximum check number
          </h3>
          <div className="main__content_container__box__select_container">
            <input
              type="number"
              id="max_check_number"
              min={1}
              max={99}
              value={possibleCheckNumber}
              onChange={(e) =>
                updateSetting(
                  "lsCheckNum",
                  e.target.value,
                  setPossibleCheckNumber
                )
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettingsPage;
