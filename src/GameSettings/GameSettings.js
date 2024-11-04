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
  const [difficulty, setDifficulty] = useState("medium");
  const [username, setUsername] = useState("username");
  const [possibleCheckNumber, setPossibleCheckNumber] = useState(3);
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
