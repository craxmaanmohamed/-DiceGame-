import React from 'react'
import { useState } from 'react';
import './Dice.css'
import dice1 from "/public/images/dice1.png"
import dice2 from "/public/images/dice2.png"
import dice3 from "/public/images/dice3.png"
import dice4 from "/public/images/dice4.png"
import dice5 from "/public/images/dice5.png"
import dice6 from "/public/images/dice6.png"

export default function Dice() {
    const [player, setPlayer] = useState(1); // Current player (1 or 2)
    const [player1Roll, setPlayer1Roll] = useState(1);
    const [player2Roll, setPlayer2Roll] = useState(1); 
  
    const handleRoll = () => {
        if (player === 1) {
          setPlayer1Roll(Math.floor(Math.random() * 6) + 1); 
        } else {
          setPlayer2Roll(Math.floor(Math.random() * 6) + 1); 
        }
        setPlayer(player === 1 ? 2 : 1); // Switch players
      };
    
      const getImage = (roll) => {
        const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
        return diceImages[roll - 1];
      };
    

  return (
    <div className="dicecontainer">
        
        <div className="diceMdContainer">
    
            <div className="imgBtn">
            <img src={getImage(player1Roll)} alt={`Player 1 Dice ${player1Roll}`} />

            <button 
            onClick={handleRoll} disabled={player === 2} 
            style={{backgroundColor :player==1?"green":"",color :player==1?"white":""}}>
                Player 1 Roll
            </button>

            </div>
            <div className="imgBtn">
            <img src={getImage(player2Roll)} alt={`Player 2 Dice ${player2Roll}`} />

            <button onClick={handleRoll} disabled={player === 1}
             style={{backgroundColor :player==2?"green":"",color :player==2?"white":""}}>
                Player 2 Roll
            </button>

            </div>

        </div>
    </div>
  )
}
