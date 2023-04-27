import React from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

 function NavBar({ onChangePage }) {
    
  function handleLinkClick(e) {
      e.preventDefault()
      onChangePage(e.target.pathname)
  }
  
  return (
  
 
      <nav className="App min-h-screen animate-moveGradient">
          <NavLink exact to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/history">HISTORY</NavLink>
      </nav>
  );

}

export default NavBar;