import React from 'react'
import './Contact.scss'
import {Link} from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact() {
    return (
        <div className="contact">
            <Link to="/">
                < ArrowBackIcon className="arrow" sx={{ fontSize: 50 }}/>
            </Link>

            <div className="input">
                <h1>Contactez Moi</h1>
                <a href="https://www.linkedin.com/in/jean-martial-053279a7/" target="_blank"><LinkedInIcon sx={{ fontSize: 60 }}/></a>
                <p>Par mail : jj.martial@gmail.com</p>
            </div>
        </div>
    )
}
