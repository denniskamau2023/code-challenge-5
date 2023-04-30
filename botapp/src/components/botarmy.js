import React from "react";

function YourBotArmy({ army, removeBotFromArmy, dischargeBot }) {
    return (
      <div>
        <h2>Your Bot Army</h2>
        {army.map((bot) => (
          <div key={bot.id}>
            <h3>{bot.name}</h3>
            <button onClick={() => removeBotFromArmy(bot)}>Remove from Army</button>
            <button className="red-button" onClick={() => dischargeBot(bot)}>Discharge</button>
          </div>
        ))}
      </div>
    );
  }

export default YourBotArmy;