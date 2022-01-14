import React from 'react'
import './Skills.scss';
import {Link} from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Skills() {
    return (
        <div className="skills" id="skills">
            <Link to="/">
                < ArrowBackIcon className="arrow" sx={{ fontSize: 50 }}/>
            </Link>
            <div className="skills-container">
                <div className="skills-container-content">
                    <h1>Qui suis-je?</h1>
                    <p>Développeur JavaScript</p>
                    <p>Développeur Réact Js</p>
                    <p>Je travail avec Html, Css, Sass</p>
                    <p>Babel, Webpack, Git et GitHub</p>
                </div>
            </div>
        </div>
    )
}
