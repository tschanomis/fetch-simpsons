import React from 'react';
import axios from 'axios';
import DisplaySimpsons from './components/DisplaySimpsons';
import './App.css';

const first = 
  {
  "quote": "By chilling my loins I increase the chances of impregnating my wife.",
  "character": "Apu Nahasapeemapetilon",
  "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  "characterDirection": "Left"
  }

console.log(first);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: first,
    };
    this.getSimpsons = this.getSimpsons.bind(this);
  }

  getSimpsons() {
    // Send the request
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        console.log(data);
        this.setState({
          simpson: data[0],
        });
    });
  }
  
  render() {
  return (
    <div className="App">
      <DisplaySimpsons simpson={this.state.simpson} />  
      <button type="button" onClick={this.getSimpsons}>Get Simpsons</button>
    </div>
    );
  }
}
export default App
