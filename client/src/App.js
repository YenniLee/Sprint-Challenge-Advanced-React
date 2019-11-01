import React from 'react';
import './App.css';
import axios from 'axios';
import PlayersList from './components/PlayersList';
import NavBar from './components/NavBar';


class App extends React.Component {
  state = {
    playerData: []
  }

  componentDidMount() {
    axios 
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        // console.log(res.data);
        this.setState({
          playerData: res.data
        })
      })
      .catch(err => console.log('axios error', err))
  }
  render(){
    return (
      <div className='App'>
        <NavBar />
        <PlayersList playerData={this.state.playerData}/>
      </div>
    )
  }
}

export default App;
