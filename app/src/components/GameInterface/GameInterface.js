import React, { useState } from 'react';

const GameInterface = ({ onDrawCard }) => {
  const [gameState, setGameState] = useState([]);

  const drawCard = async () => {
    try {
      const response = await fetch('/api/draw-card', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        setGameState(data); // Update game state with data received from the backend
        onDrawCard(); // Notify parent component of card draw
      } else {
        console.error('Failed to draw card');
      }
    } catch (error) {
      console.error('Error drawing card:', error);
    }
  };

  return (
    <div>
      <h2>Game Interface</h2>
      <button onClick={drawCard}>Draw Card</button>
      <div>
        {/* Display game deck, drawn cards, and game status */}
      </div>
    </div>
  );
};

export default GameInterface;
