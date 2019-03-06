import React from 'react';
import './ApplicationCenter.css';

class ApplicationCenter extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event);
  }

  render() {
    return (
      <div className="ApplicationCenter" >
        <h1>רשום עיר או מדינה</h1>
        <input type='search' placeholder='שם עיר' onChange={this.onInputChange} />
        <input type='button' className="button1" value="קבל את התחזית"/>
      </div>
    );
  }
} 
  
  export default ApplicationCenter;
  