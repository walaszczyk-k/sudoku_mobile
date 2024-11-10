import React, { createContext, useState } from "react";

export const GameSettingsContext = createContext({
  difficulty: "medium",
  username: "username",
  possibleCheckNumber: 3,
  setDifficulty: () => {},
  setUsername: () => {},
  setPossibleCheckNumber: () => {},
});

export const GameSettingsProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState(localStorage.getItem("lsGameLevel") || "medium");
  const [username, setUsername] = useState(localStorage.getItem("lsUsername") || "username");
  const [possibleCheckNumber, setPossibleCheckNumber] = useState(localStorage.getItem("lsCheckNum") || 3);
  return (
    <GameSettingsContext.Provider
      value={{
        difficulty,
        setDifficulty,
        username,
        setUsername,
        possibleCheckNumber,
        setPossibleCheckNumber,
      }}
    >
      {children}
    </GameSettingsContext.Provider>
  );
};
