import React from 'react';
import './ApplicationCenter.css';

class ApplicationCenter extends React.Component {
    render() {
      return (
        <div className="ApplicationCenter" >
          <h1>רשום עיר או מדינה</h1>
          <input type='search' placeholder='שם עיר' />
          <div className="buttonCenter">
            <input type="button" className="button1" value="קבל את התחזית"/>
          </div>
        </div>
      );
    }
  } 
  
  export default ApplicationCenter;
  