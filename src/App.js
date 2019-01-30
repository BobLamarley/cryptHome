import React, { Component } from 'react';
import CryptoList from './components/cryptoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CryptoList />
      </div>
    );
  }
}

export default App;
