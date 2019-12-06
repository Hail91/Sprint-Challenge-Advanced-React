import React from 'react';
import './App.css';
import axios from 'axios';
import PlayerCard from './components/PlayerCard';
import NavBar from './components/NavBar';

class App extends React.Component {
  state = {
    players: [] 
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
    .then(res => {
      console.log(res)
      this.setState({
        players: res.data
      })
      console.log(res.data)
    })
    .catch(error => {
      console.log('Data was not returned!', error);
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        <PlayerCard
        players={this.state.players}
        />
      </div>
    )
  }
}

export default App;
