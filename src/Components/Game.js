import React from 'react';
import './Game.css';
import Monster from './Monster';
import PlayerList from './PlayerList';
import background from '../assets/images/midgar.jpg';
import gameOverImage from '../assets/images/FFVIIGameover.png'
import winImage from '../assets/images/FFVIIWin.jpg'
import winAudio from '../assets/sounds/audioWin.mp3'
import lostAudio from '../assets/sounds/audiolost.mp3'
import { useSelector } from 'react-redux';








function App() {
  const players = useSelector((store) => store.fight.players);
  const monster = useSelector((store) => store.fight.monster)



  return (

    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      {players.checkDeads === 4 &&
        <div className=' absolute z-50 w-full h-screen flex justify-center items-center backdrop-blur-sm'>
          <img src={gameOverImage} alt='game over' />
          < audio controls autoPlay>
            <source src={lostAudio} type="audio/mpeg" />
          </audio>

        </div>
      }
      {monster.pv <= 0 &&
        <div className=' absolute z-50 w-full h-screen flex flex-col justify-center items-center backdrop-blur-sm'>
          <img src={winImage} alt='win' />
          < audio controls autoPlay>
            <source src={winAudio} type="audio/mpeg" />
          </audio>
        </div>
      }
      <Monster />
      <section className="flex ustify-center p-12">
        <PlayerList />
      </section>
    </div>
  )
}

export default App;