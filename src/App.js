import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="ApplicationCenter" >
        <h1>רשום עיר או מדינה</h1>
        <input type="text"></input>
        <div>
          <input type="button" value="קבל את התחזית"></input>
        </div>
      </div>
    );
  }
} 

export default App;



