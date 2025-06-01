import React, { createContext, useContext, useState } from 'react';

export const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
  const [latestScore, setLatestScore] = useState(0);

  return (
    <ScoreContext.Provider value={{ latestScore, setLatestScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

// ✅ this was missing!
export const useScore = () => {
  return useContext(ScoreContext);
};
