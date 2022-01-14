import React from "react";
import "./Navbar.scss";
import close from '../../assets/close.svg'; 
import menu from '../../assets/menu.svg' 
import {Link, NavLink} from 'react-router-dom';
import {useState, useEffect} from 'react'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {

    //Montrer la navbar
    const [active, setActive] = useState(false);
    const showMenu = () => {
        setActive(!active)
    }


  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h1>MARTIAL</h1>
      </div>
      <nav className={active ? 'navbar-items active' : 'navbar-items'}>
        <ul id="navbar-menu">
          <div className="closed" >           
            <CloseIcon className="close" onClick={showMenu}/>
          </div>

          <li>
              <Link to="/">Accueil</Link>
          </li>
          <li>
              <Link to="/skills">A Propos de Moi</Link>
          </li>    
          <li>
              <Link to="/contact">Contact</Link>
          </li>
          
        </ul>
      </nav>

      <div className="changer" >       
        <MenuIcon className="menu" onClick={showMenu}/>
      </div>
    </div>
  );
}
