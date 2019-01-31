import React from "react";
import '../home/home.css';
import Menu from '../menu/menu';
import '../menu/menu.css';
import { Link } from "react-router-dom";

class MenuReady extends React.Component {
  render() {
    return (
      <div>
        <Menu>
            <Link to="/">Home</Link>
            <Link id="cryptoList" to="/cryptolist">cryptolist</Link>
        </Menu>
      </div>
    );
  }
}

export default MenuReady;