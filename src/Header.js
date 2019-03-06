import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
      return (
        <div className="Header" >
            <div className="inputHeader">
                <div>
                    <input type="button" className="button2" value="קבל את התחזית"/>
                </div>
                <input type='search' placeholder='שם עיר'/>
            </div>
            <h1 className="textHeader">התחזית</h1>
        </div>
      );
    }
  } 
  
  export default Header;
  