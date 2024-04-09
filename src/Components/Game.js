import React from 'react';
import './Game.css';
import Monster from './Monster';
import PlayerList from './PlayerList';
import background from '../assets/images/midgar.jpg'



const App = () => (
  <div className="App" style ={{backgroundImage:`url(${background})`}}>
      <Monster />
      <br></br>
      <section className="container-fluid">
          <PlayerList />
      </section>
  </div>
)

export default App;