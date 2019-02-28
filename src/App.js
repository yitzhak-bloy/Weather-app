import React from 'react';
import ApplicationCenter from './ApplicationCenter';
import Header from './Header';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="allApp" >
        <Header />
        <ApplicationCenter />
      </div>
    );
  }
} 

export default App;



