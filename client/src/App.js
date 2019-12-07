import React from "react";
import PlayerCard from "./components/PlayerCard";
import NavBar from "./components/NavBar";
import "./App.css";

class App extends React.Component {
  state = {
    playerData: []
  };

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ playerData: data });
      });
  }
  render() {
    return (
      <div>
        <NavBar />
        <PlayerCard players={this.state.playerData} />
      </div>
    );
  }
}

export default App;
