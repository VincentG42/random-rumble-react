import React from 'react';
import './Game.css';
import Monster from './Monster';
import PlayerList from './PlayerList';
import gameOverImage from '../assets/images/FFVIIGameover.png'
import winImage from '../assets/images/FFVIIWin.jpg'
import winAudio from '../assets/sounds/audioWin.mp3'
import lostAudio from '../assets/sounds/audiolost.mp3'
import { useSelector } from 'react-redux';








function App() {
  const players = useSelector((store) => store.fight.players);
  const monster = useSelector((store) => store.fight.monster)

  const restart = () => {
    window.location.reload(false);
  }

  return (

    <div className="App" >
      {players.checkDeads === 4 &&
        <div className=' absolute z-50 w-full h-screen flex justify-center items-center backdrop-blur-sm'>
          <button id="restart" onClick={restart} className='px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg'>Restart</button>
          <img src={gameOverImage} alt='game over' />
          < audio controls autoPlay>
            <source src={lostAudio} type="audio/mpeg" />
          </audio>

        </div>
      }
      {monster.pv <= 0 &&
        <div className=' absolute z-50 w-full h-screen flex flex-col justify-center items-center backdrop-blur-sm'>
          <button id="restart" onClick={restart} className='px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg'>Restart</button>
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