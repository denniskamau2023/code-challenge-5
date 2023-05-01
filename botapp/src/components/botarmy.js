import React from "react";

function YourBotArmy({ army, removeBotFromArmy, dischargeBot }) {
    return (
      <div>
        <h2>Your Bot Army</h2>
        {bots.map((bots) => (
          <div key={bots.id}>
             <div key={bots.id}>
          <h3>{bots.name}</h3>
        <div className="card" style="width: 18rem;">
        <img src={bots.avatar_url} className="card-img-top" alt={bots.name} />
        <div className="card-body">
        <h5 className="card-title">{bots.name}</h5>
        <p className="card-text">{bots.bot_class}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{bots.health}</li>
          <li className="list-group-item">{bots.damage}</li>
          <li className="list-group-item">{bots.armor}</li>
          <li className="list-group-item">{bots.catchphrase}</li>
          <li className="list-group-item">{bots.created_at}</li>
          <li className="list-group-item">{bots.updated_at}</li>
    
          
        </ul>
        <div className="card-body">
        <button onClick={() => removeBotFromArmy(bots)}>Remove from Army</button>
            <button className="red-button" onClick={() => dischargeBot(bots)}>Discharge</button>
        </div>
        </div>
            
          </div>
        ))}
      </div>
    );
  }

export default YourBotArmy;