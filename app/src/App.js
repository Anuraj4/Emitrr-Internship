import React from 'react';
import UserRegistration from './components/UserRegistration/UserRegistration';
import GameInterface from './components/GameInterface/GameInterface';
import Leaderboard from './components/Leaderboard/Leaderboard';

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <UserRegistration />
      <GameInterface />
      <Leaderboard />
    </div>
  );
}

export default App;
