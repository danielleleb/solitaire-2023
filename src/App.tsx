import React, { useState } from 'react';
import './App.css';
import { DrawDeckContainer } from './components';
import { useGame } from './hooks/useGame';
import { GameContext } from './contexts';
import { TopPileContainer } from './components/TopPileContainer';

function App() {
  const game = useGame();

  return (
    <GameContext.Provider value={game}>
      <div className="flex justify-between">
        <DrawDeckContainer />
        <TopPileContainer/>
      </div>
    </GameContext.Provider>
  );
}

export default App;
