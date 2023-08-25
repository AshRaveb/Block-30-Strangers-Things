/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import React from 'react';
import overlayImage from '../assets/Logo7.png';

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Stranger's Things</h1>
        <p>Your go-to platform for buying and selling unique items!</p>
      </header>
      <section className="home-features">
        <div className="feature">
          <h2>Explore</h2>
          <p>Discover a wide range of items from different sellers.</p>
          <img className="home-image" src="src\assets\hand-explore.png" alt="Eplore" />
        </div>
        <div className="feature">
          <h2>Sell</h2>
          <p>List your own items for sale and connect with potential buyers.</p>
          <img className="home-image" src="src\assets\sell-hand.png" alt="Sell" />
        </div>
        <div className="feature">
          <h2>Connect</h2>
          <p>Communicate with buyers and sellers through our messaging system.</p>
          <img className="home-image" src="src\assets\connect-hand.png" alt="Connect" />
        </div>
      </section>
<div className= "large-logo">
<img src={overlayImage} alt="Logo" />
</div>
      <footer className="home-footer">
        <p>&copy; 2023 Strangers' Things. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;