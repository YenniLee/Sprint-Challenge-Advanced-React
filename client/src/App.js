import React from 'react';
import './App.css';
import axios from 'axios';
import PlayerList from './components/PlayerList';

class App extends React.Component{
  state = {
    playerData: []
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
       // console.log(res.data)
        this.setState({
          playerData: res.data
        })
      })
      .catch(err => console.log('axios call error', err))
  }

  render(){
    return(
      <div className='App'>
        <PlayerList players={this.state.playerData} />
      </div>
    )
  }
}


export default App;