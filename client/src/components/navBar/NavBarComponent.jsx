import React from "react";
import { Link } from 'react-router-dom';
import SearchBarComponent from "../searchBar/SearchBarComponent";
import logo from '../../assets/logo.png'
import './navBar.css'

function NavBarCompoment(params) {
    return(
        <div className="navbar">
                <div className="logo">
                    <Link to='/'>
                        <img src={logo} alt="Logo" height='70px'/>
                    </Link>
                </div>
            
                <div className="links">
                    <div>
                        <Link className="Link" to='/home'>
                            <div className="linkToHome">Inicio</div>
                        </Link>
                    </div>
                    <div>
                        <Link className="Link" to='/create'>
                            <div className="linkToCreate">Nueva Actividad</div>
                        </Link>
                    </div>
                    <div className="searchBar">
                        <SearchBarComponent/>
                    </div>
                </div>
        </div>
    )
};

export default NavBarCompoment;