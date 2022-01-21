import React from "react";
import "./Main.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import click from  '../../assets/click.png';
import {Link} from 'react-router-dom'


export default function Main() {
  return (
    <div className="main" id="main">
      <div className="main-container">

        <div className="text">
          <p>Hey, Bienvenue à Toi</p>
          <h1>Je Suis Jean Martial</h1>
          <p>Développeur Front-end</p>

          <div className="icons">
            <a href="https://www.linkedin.com/in/jean-martial-053279a7/" target="_blank"><LinkedInIcon className="icon primary"/></a>
            <a href="https://github.com/Jeandevweb" target="_blank"><GitHubIcon className="icon secondary" /></a>
          </div>

          <div className="buttons">
                <Link to="/works"><button>Mes Projets</button></Link>
                <Link to="/contact"><button>Me Contacter</button></Link>

          </div>
        </div>

        <div className="main-img">
            <img src={click} alt="" />
            
        </div>

      </div>
    </div>
  );
}
