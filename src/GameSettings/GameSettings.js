import React, {createContext, useState} from "react";

export const GameSettingsContext = createContext({
    difficulty: "medium",
    username: "username",
    setDifficulty: () => {},
    setUsername: () => {},
});

export const GameSettingsProvider = ({ children }) => {
    const [difficulty, setDifficulty] = useState("medium");
    const [username, setUsername] = useState("username");
    return (
        <GameSettingsContext.Provider value={{ difficulty, setDifficulty, username, setUsername }}>
            {children}
        </GameSettingsContext.Provider>
    );
};