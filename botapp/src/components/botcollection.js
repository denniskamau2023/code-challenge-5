import React from "react";

function BotCollection({ bots, addBotToArmy }) {
    return (
      <div>
        <h2>Bot Collection</h2>
        {bots.map((bot) => (
          <div key={bot.id}>
            <h3>{bot.name}</h3>
            
            <button onClick={() => addBotToArmy(bot)}>Add to Army</button>
          </div>
        ))}
      </div>
    );
  }

  export default BotCollection;