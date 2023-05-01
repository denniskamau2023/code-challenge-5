import './App.css';
import React,{useState, useEffect} from 'react';
import BotCollection from './components/botcollection';
import YourBotArmy from './components/botarmy'


function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  function addBotToArmy(bot) {
    if (!army.includes(bot)) {
      setArmy([...army, bot]);
    }
  }

  function removeBotFromArmy(bot) {
    setArmy(army.filter((b) => b !== bot));
  }

  function dischargeBot(bot) {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then(() => {
        setArmy(army.filter((b) => b !== bot));
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className='container'>
      <div className='top'>
      <BotCollection bots={bots} addBotToArmy={addBotToArmy} />
      </div>
      <div className='bottom'>
      <YourBotArmy army={army} removeBotFromArmy={removeBotFromArmy} dischargeBot={dischargeBot} />
      </div>
    </div>
  );
}

export default App;
