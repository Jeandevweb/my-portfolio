import React from 'react'
import './Works.scss';
import actos from '../../assets/actosSite.png';
import quizz from '../../assets/quizz.png';
import fetchCountries from '../../assets/fetchCountries.png';
import pokedex from '../../assets/pokedex.png';
// import random from '../../assets/randomGithub.png';
import todo from '../../assets/todoList.png';
import tetris from '../../assets/tetris.png';
import maps from '../../assets/maps.jpg';
import planet from '../../assets/planetStudio.png';
import {Link} from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from "@mui/icons-material/GitHub";
import chatroom from '../../assets/maquetteChatroom.png';
import githubApi from '../../assets/githubApi.png';
 
export default function Works() {
    return (
        <div className="works-background">
        <div className="works" id="works">
            <Link to="/">
                < ArrowBackIcon className="arrow" sx={{ fontSize: 50 }}/>
            </Link>
            <div className="work-section">

                <div className="cards">
                    <img src={maps} alt="map image" />
                    <button>Accéder</button>
                    <div className="cards-icons">
                        <a href="https://github.com/Jeandevweb/travel-advisor" target="_blank"><GitHubIcon className="icon-work"/></a>
                    </div>
                    <p className="cards-title">Travel advisor</p>
                    <p className="cards-description">React, React GoogleMap, Material UI, RapidAPI</p>
                </div>

                <div className="cards">               
                    <img src={chatroom} alt="map image" />
                    <div className="cards-icons">
                        <a href="https://github.com/Jeandevweb/chatroom-react/tree/master/chatroom-react-redux-socketio-master/" target="_blank"><GitHubIcon className="icon-work"/></a>
                    </div>
                    <p className="cards-title">ChatRoom</p>
                    <p className="cards-description">React, Redux, Express, Socket.io</p>             
                </div>

                <div className="cards">               
                    <img src={githubApi} alt="map image" />
                    <div className="cards-icons">
                        <a href="https://github.com/Jeandevweb/github-API" target="_blank"><GitHubIcon className="icon-work"/></a>
                    </div>
                    <p className="cards-title">Github API</p>
                    <p className="cards-description">React, Redux, API Github</p>             
                </div>

                <div className="cards one">
                        <img src={actos} alt="actos image" className="img-one"/>
                        <div className="cards-icons">
                            <a href="https://clever-aryabhata-7d0a12.netlify.app/" target="_blank"><LanguageIcon className="icon-work"/></a>
                            <a href="https://github.com/Jeandevweb/SiteActosSass" target="_blank"><GitHubIcon className="icon-work"/></a>
                        </div>
                    <p className="cards-title">Actos Site</p>
                    <p className="cards-description">HTML, SCSS, Javascript, Responsive</p>
                </div>

                <div className="cards">
                    <img src={planet} alt="planetStudio image" />
                    <div className="cards-icons">
                        <a href="https://www.planet-studio.fr/" target="_blank"><LanguageIcon className="icon-work"/></a>
                        <a><GitHubIcon className="icon-work"/></a>
                    </div>
                    <p className="cards-title">PlanetStudio Architecture</p>
                    <p className="cards-description">Site Web réalisé avec Squarespace</p>
                </div>

                <div className="cards">              
                    <img src={quizz} alt="quizz image" />             
                    <div className="cards-icons">
                        <a href="https://dreamy-shannon-409850.netlify.app/" target="_blank"><LanguageIcon className="icon-work"/></a>
                        <a href="https://github.com/Jeandevweb/Quizz" target="_blank"><GitHubIcon className="icon-work"/></a>
                    </div>
                    <p className="cards-title">Quizz</p>
                    <p className="cards-description">HTML, CSS, Javascript</p>               
                </div>

                <div className="cards">                  
                    <img src={tetris} alt="tetris image" />                 
                    <div className="cards-icons">
                        <a href="https://the-beautiful-tetris.netlify.app/" target="_blank"><LanguageIcon className="icon-work"/></a>
                        <a href="https://github.com/Jeandevweb/Tetris-basic" target="_blank"><GitHubIcon className="icon-work"/></a>
                    </div>
                    <p className="cards-title">Tétris</p>
                    <p className="cards-description">Javascript, HTML, CSS </p>                   
                </div>

                <div className="cards">
                    <img src={fetchCountries} alt="countries image" />
                    <div className="cards-icons">
                        <a href="https://mystifying-gates-7f2b1a.netlify.app/" target="_blank"><LanguageIcon className="icon-work"/></a>
                        <a href="https://github.com/Jeandevweb/FetchCountriesAPI" target="_blank"><GitHubIcon className="icon-work"/></a>
                    </div>
                    <p className="cards-title">Fetch API</p>
                    <p className="cards-description">Javascript, HTML, CSS, Bootstrap </p>
                </div>

                <div className="cards">
                    <img src={pokedex} alt="pokedex image" />
                    <div className="cards-icons">
                        <a href="https://wizardly-nightingale-4dbdb7.netlify.app/" target="_blank"><LanguageIcon className="icon-work"/></a>
                        <a href="https://github.com/Jeandevweb/ThePokedex" target="_blank"><GitHubIcon className="icon-work"/></a>
                    </div>
                    <p className="cards-title">Pokedex</p>
                    <p className="cards-description">Javascript, HTML, CSS, PokeAPI </p>           
                </div>           

                <div className="cards">                   
                    <img src={todo} alt="todolist image" />
                    <div className="cards-icons">
                        <a href="https://zen-hoover-3d17e5.netlify.app/" target="_blank"><LanguageIcon className="icon-work"/></a>
                        <a href="https://github.com/Jeandevweb/ToDo-Simple" target="_blank"><GitHubIcon className="icon-work"/></a>
                    </div>
                    <p className="cards-title">ToDo List</p>
                    <p className="cards-description">Javascript, HTML, CSS</p>
                </div>
            </div>


        </div>
        </div>
    )
}
