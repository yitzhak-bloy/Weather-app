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
  }

  onInputChange = (event) => {
    console.log(event);
  }

  componentDidMount() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=%D7%A8%D7%97%D7%95%D7%91%D7%95%D7%AA&type=accurate&APPID=de6b1890ad2f21aebdbfb8e1bd667add')
    .then(response=> response.json())
    .then(zxc => console.log(zxc));
  }

  render() {
    return (
      <div className="allApp" >
        <Header />
        <ApplicationCenter onInputChange={this.onInputChange} />
      </div>
    );
  }
} 

export default App;



