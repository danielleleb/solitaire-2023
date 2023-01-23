import React, { useState } from 'react';
import './App.css';
import { DrawDeckContainer } from './components';
import { useGame } from './hooks/useGame';
import { GameContext } from './contexts';
import { TopPileContainer } from './components/TopPileContainer';
import { MainPileContainer } from './components/MainPileContainer';

function App() {
  const game = useGame();

  return (
    <GameContext.Provider value={game}>
      <div className="flex justify-between relative h-36">
        <DrawDeckContainer />
        <TopPileContainer />
      </div>
      {/* <div className='relative'> */}
        <MainPileContainer />
      {/* </div> */}
    </GameContext.Provider>
  );
}

export default App;
