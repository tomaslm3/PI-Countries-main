import React, { useState} from "react";
import { Link } from "react-router-dom";
import './searchBarComponent.css'

function  SearchBarComponent() {
    const [name, setName] = useState('');
    function handleInputName(e) {
        e.preventDefault();
        setName(e.target.value)
    }

    function handleClick(e){
        setName('');
    };

    return(
        <div className="searchBarComponent">
            <form>
                <input
                className="searchBarInput"
                type='text'
                value={name}
                onChange={e => handleInputName(e)}
                placeholder='Buscar paises...'
                >
                </input>
                <Link to={`/search/${name}`}>
                    <button className="searchBarBtn" onClick={e => handleClick(e)}>Buscar</button>
                </Link>
            </form>
        </div>
    )
};

export default SearchBarComponent;