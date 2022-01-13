import React from 'react'
import './Works.scss';
import actos from '../../assets/actosSite.png';
import quizz from '../../assets/quizz.png';
import fetchCountries from '../../assets/fetchCountries.png';
import pokedex from '../../assets/pokedex.png';
import random from '../../assets/randomGithub.png';
import todo from '../../assets/todoList.png';
 
export default function Works() {
    return (
        <div className="works" id="works">
            <div className="work-section">
                <div className="cards one">
                    <a href="https://clever-aryabhata-7d0a12.netlify.app/" target="_blank">
                        <img src={actos} alt="actos image" className="img-one"/>
                        <button>Accéder</button>
                    </a>
                </div>
                <div className="cards">
                    <a href="https://dreamy-shannon-409850.netlify.app/" target="_blank">
                    <img src={quizz} alt="quizz image" />
                    <button>Accéder</button>
                    </a>
                </div>
                <div className="cards">
                    <a href="https://mystifying-gates-7f2b1a.netlify.app/" target="_blank">
                    <img src={fetchCountries} alt="countries image" />
                    <button>Accéder</button>
                    </a>
                </div>
                <div className="cards">
                    <a href="https://wizardly-nightingale-4dbdb7.netlify.app/" target="_blank">
                    <img src={pokedex} alt="pokedex image" />
                    <button>Accéder</button>
                    </a>
                </div>
                <div className="cards">
                    <a href="https://priceless-minsky-43a666.netlify.app/" target="_blank">
                    <img src={random} alt="github image" />
                    <button>Accéder</button>
                    </a>
                </div>
                <div className="cards">
                    <a href="https://zen-hoover-3d17e5.netlify.app/" target="_blank">
                    <img src={todo} alt="todolist image" />
                    <button>Accéder</button>
                    </a>
                </div>
            </div>


        </div>
    )
}
