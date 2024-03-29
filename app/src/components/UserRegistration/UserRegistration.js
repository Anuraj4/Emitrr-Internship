import React, { useState } from 'react';

const UserRegistration = ({ onRegister }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.trim() !== '') {
      onRegister(username);
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserRegistration;
