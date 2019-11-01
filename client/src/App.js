import React from 'react';
import './App.css';
import axios from 'axios';
import PlayersList from './components/PlayersList';

class App extends React.Component {
  state = {
    playerData: []
  }

  componentDidMount() {
    axios 
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log(res.data);
        this.setState({
          playerData: res.data
        })
      })
      .catch(err => console.log('axios error', err))
  }
  render(){
    return (
      <div className='App'>
        <h1>Soccer Players</h1>
        <PlayersList playerData={this.state.playerData}/>
      </div>
    )
  }
}

export default App;
