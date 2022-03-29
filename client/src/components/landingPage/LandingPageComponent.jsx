import React from "react";
import { Link } from "react-router-dom";

function LandingPageComponent() {
    return(
        <div>
            <h1>PI COUNTRIES</h1>
            <Link to='/home'>
                <button>Home</button>
            </Link>
        </div>
    )
}

export default LandingPageComponent;