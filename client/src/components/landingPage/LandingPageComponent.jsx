import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import './landingPageComponent.css'

function LandingPageComponent() {
    return(
        <div className="landingPage">
            <h1 className="frase">“Un viaje de mil millas comienza con un solo paso”. – Lao Tzu</h1>
                <NavLink className="linkLading" to='/home'>
                    <h1>Empezar</h1>
                    <img src={logo} alt="Logo" height='50px'/>
                </NavLink>
        </div>
    )
}

export default LandingPageComponent;