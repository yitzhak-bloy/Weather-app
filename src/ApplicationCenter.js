import React from 'react';
import './ApplicationCenter.css';

  const ApplicationCenter = ({ onInputChange, onButtonSubmit}) => {
    return (
      <div className="ApplicationCenter" >
        <h1>רשום עיר או מדינה</h1>
        <input type='search' placeholder='שם עיר' onChange={onInputChange} />
        <input type='button' className="button1" value="קבל את התחזית" onClick={onButtonSubmit}/>
      </div>
    );
  }

  export default ApplicationCenter;