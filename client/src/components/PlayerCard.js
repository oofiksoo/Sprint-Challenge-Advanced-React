import React from "react";

export default props => {
  return (
    <div className="playerCardSpace">
      {props.players.map(player => (
        <div className="playerCard">
          <h1>{player.name}</h1>
          <h3>{player.country}</h3>
          <div className="searchCount">
            <h2>Search Count:{player.searches}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};
