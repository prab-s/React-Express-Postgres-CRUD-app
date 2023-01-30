import React, { useState } from 'react';
import "../styles/Dice.css"
// https://upmostly.com/tutorials/simplifying-react-state-and-the-usestate-hook

function Dice() {

    const [firstDieResult, setFirstDieResult] = useState(1);
    const [secondDieResult, setSecondDieResult] = useState(6);
  
    const firstDieImage = require(`../assets/${firstDieResult}.png`);
    const secondDieImage = require(`../assets/${secondDieResult}.png`);
  
    function rollDice() {
      setFirstDieResult(Math.floor(Math.random() * 6) + 1);
      setSecondDieResult(Math.floor(Math.random() * 6) + 1);
    }

    return (
        <>
            <h1 className="text-center mt-2">Dice</h1>
            <div className="App">
                <header className="App-header">
                    <div style={{ display: 'flex', margin: 20 }}>
                        <img src={firstDieImage} className="die" alt="Die one" />
                        <img src={secondDieImage} className="die" alt="Die two" />
                    </div>
                    <div id="count_label">{firstDieResult + secondDieResult}</div>
                    <button className="button" onClick={rollDice}>Roll</button>
                </header>
            </div>
        </>
    );
};

export default Dice;