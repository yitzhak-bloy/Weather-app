import React from 'react';
import './ApplicationCenter.css';

class ApplicationCenter extends React.Component {
    render() {
      return (
        <div className="ApplicationCenter" >
          <h1>רשום עיר או מדינה</h1>
          <input type="text"></input>
          <div>
            <input type="button" className="button1" value="קבל את התחזית"></input>
          </div>
        </div>
      );
    }
  } 
  
  export default ApplicationCenter;
  