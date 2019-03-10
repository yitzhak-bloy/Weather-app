import React from 'react';
import './ApplicationCenter.css';

class ApplicationCenter extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=%D7%A8%D7%97%D7%95%D7%91%D7%95%D7%AA&type=accurate&APPID=de6b1890ad2f21aebdbfb8e1bd667add')
    .then(response=> response.json())
    .then(zxc => console.log(zxc));
  }

  onButtonSubmit = () => {
    console.log("click");
  }

  render() {
    return (
      <div className="ApplicationCenter" >
        <h1>רשום עיר או מדינה</h1>
        <input type='search' placeholder='שם עיר' onChange={this.onInputChange} />
        <input type='button' className="button1" value="קבל את התחזית" onClick={this.onButtonSubmit}/>
      </div>
    );
  }
} 
  
  export default ApplicationCenter;
  