import React, { createContext, useState, useMemo } from "react";

const DEFAULT_SETTINGS = {
  difficulty: "medium",
  username: "username",
  possibleCheckNumber: 3,
};

export const GameSettingsContext = createContext({
  ...DEFAULT_SETTINGS,
  setDifficulty: () => {},
  setUsername: () => {},
  setPossibleCheckNumber: () => {},
});

const getFromLocalStorage = (key, fallback) => {
  const value = localStorage.getItem(key);
  return value !== null ? value : fallback;
};

export const GameSettingsProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState(() =>
    getFromLocalStorage("lsGameLevel", DEFAULT_SETTINGS.difficulty)
  );
  const [username, setUsername] = useState(() =>
    getFromLocalStorage("lsUsername", DEFAULT_SETTINGS.username)
  );
  const [possibleCheckNumber, setPossibleCheckNumber] = useState(() =>
    Number(getFromLocalStorage("lsCheckNum", DEFAULT_SETTINGS.possibleCheckNumber))
  );

  const contextValue = useMemo(
    () => ({
      difficulty,
      setDifficulty,
      username,
      setUsername,
      possibleCheckNumber,
      setPossibleCheckNumber,
    }),
    [difficulty, username, possibleCheckNumber]
  );

  return (
    <GameSettingsContext.Provider value={contextValue}>
      {children}
    </GameSettingsContext.Provider>
  );
};
