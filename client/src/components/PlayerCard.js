import React from "react";

export default props => {
  return (
    <div className="playerCardSpace">
      {props.players.map(player => (
        <div className="playerCard">
          <h2>{player.name}</h2>
          <h3>{player.country}</h3>
          <h1>Search Count:{player.searches}</h1>
        </div>
      ))}
    </div>
  );
};
