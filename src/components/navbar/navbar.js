import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './navbar.css';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-menu">
            <div class="navbar-start">
                <Link to="/home" className="navbar-item">HOME</Link>
                <Link to="/list" className="navbar-item">LIST</Link>
                <Link to="/biz" className="navbar-item">BIZ</Link>
            </div>
        </div>
      </nav>
    );
  }
}export default NavBar;