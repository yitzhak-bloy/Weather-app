import React from 'react';
import ApplicationCenter from './ApplicationCenter';
import Header from './Header';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonSubmit = this.onButtonSubmit.bind(this);
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    console.log(this.state.input);
    if (this.state.input !== '') {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.input}&type=accurate&APPID=de6b1890ad2f21aebdbfb8e1bd667add`)
      .then(response=> response.json())
      .then(zxc => console.log(zxc));
    }
  }

  render() {
    return (
      <div className="allApp" >
        <Header onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <ApplicationCenter onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
      </div>
    );
  }
} 

export default App;



