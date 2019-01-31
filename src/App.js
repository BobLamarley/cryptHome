import React, { Component } from 'react';
import CryptoList from './components/cryptoList';
import Menu from './components/menu/menu';
import './components/menu/menu.css';
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
         <Menu>
            <Link id="home" to="/home">Home</Link>
            <Link id="app" to="/app"></Link>
         </Menu>  
        <CryptoList />
      </div>
    );
  }
}


export default App;
