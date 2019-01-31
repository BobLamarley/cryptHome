import React from "react";
import './home.css';
import MenuReady from '../menuReady/menuReady';

class Home extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <MenuReady></MenuReady> 
        <div id="home">
            <p>HOME</p>
        </div>    
      </div>
    );
  }
}


export default Home;