//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';
import { TopRow } from './TopRow';
import { HomeButtons } from './HomeButtons';
import { AwayButtons } from './AwayButtons';

function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const handleScore = (name, score) => {
    // conditional
    if (name === 'Lions') {
      setHomeScore(score);
    }

    if (name === 'Tigers') {
      setAwayScore(score);
    }

    // depending on the name value, which state do you want to set?
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow scoreSetter={handleScore} homeScore={homeScore} awayScore={awayScore} />
        <BottomRow />
      </section>
      <section className="buttons">
        <HomeButtons scoreSetter={handleScore} homeScore={homeScore} />
        <AwayButtons scoreSetter={handleScore} awayScore={awayScore} />
      </section>
    </div>
  );
}

export default App;
