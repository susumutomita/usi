import React, { useState } from 'react';
import './index.css';

const App: React.FC = () => {
  const [isThrowing, setIsThrowing] = useState(false);

  const handleThrow = () => {
    if (isThrowing) return;

    setIsThrowing(true);

    // Windup
    setTimeout(() => {
      // Throw!
      setTimeout(() => {
        setIsThrowing(false);
      }, 600); // Flight time
    }, 300); // Windup time
  };

  return (
    <div className="stadium">
      <div className="title">GRENINJA STYLE</div>

      <div className="character-container">
        <img
          src="greninja.png"
          alt="Ninja Frog"
          className={`character-image ${isThrowing ? 'throwing' : ''}`}
        />
        <div className={`shuriken ${isThrowing ? 'thrown' : ''}`}></div>
        <div className="water-spiral"></div>
      </div>

      <div className="controls">
        <button className="btn" onClick={handleThrow} disabled={isThrowing}>
          WATER SHURIKEN!
        </button>
      </div>
    </div>
  );
};

export default App;
