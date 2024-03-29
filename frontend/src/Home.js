import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <p>Please <Link to="/signup">sign up</Link> or <Link to="/login">login</Link></p>
    </div>
  );
};

export default Home;
