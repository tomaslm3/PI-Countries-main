import React from "react";
import { Link } from 'react-router-dom';

function NavBarCompoment(params) {
    return(
        <div>
            <div className="logo">
                <Link to='/'>
                    <img src="" alt="Logo"/>
                </Link>
            </div>
            <div>
                <Link to='/home'>
                    <button>Inicio</button>
                </Link>
            </div>
        </div>
    )
};

export default NavBarCompoment;