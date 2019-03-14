import React from 'react';
import './Header.css';

  const Header = ({ onInputChange, onButtonSubmit}) => {
    return (
      <div className="Header" >
          <div className="inputHeader">
              <div>
                  <input type="button" className="buttonAll button2" value="קבל את התחזית" onClick={onButtonSubmit}/>
              </div>
              <input type='search' placeholder='שם עיר'  onChange={onInputChange}/>
          </div>
          <h1 className="textHeader">התחזית</h1>
      </div>
    );
  }

  export default Header;
  