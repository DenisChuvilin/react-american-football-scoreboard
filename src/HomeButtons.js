import React, { useState } from 'react';

const HomeButtons = props => {
  return (
    <div className="homeButtons">
      {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
      <button onClick={() => props.scoreSetter('Lions', props.homeScore + 7)} className="homeButtons__touchdown">
        Home Touchdown
      </button>
      <button onClick={() => props.scoreSetter('Lions', props.homeScore + 3)} className="homeButtons__fieldGoal">
        Home Field Goal
      </button>
    </div>
  );
};
export { HomeButtons };
