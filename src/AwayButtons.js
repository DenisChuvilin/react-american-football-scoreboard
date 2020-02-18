import React, { useState } from 'react';

const AwayButtons = props => {
  //return jsx
  return (
    <div className="awayButtons">
      <button onClick={() => props.scoreSetter('Tigers', props.awayScore + 7)} className="awayButtons__touchdown">
        Away Touchdown
      </button>
      <button onClick={() => props.scoreSetter('Tigers', props.awayScore + 3)} className="awayButtons__fieldGoal">
        Away Field Goal
      </button>
    </div>
  );
};

export { AwayButtons };
