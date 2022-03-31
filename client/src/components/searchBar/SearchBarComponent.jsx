import React, { useState} from "react";
import { Link } from "react-router-dom";

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
        <div>
            <form>
                <input
                type='text'
                value={name}
                onChange={e => handleInputName(e)}>
                </input>
                <Link to={`/search/${name}`}>
                    <button onClick={e => handleClick(e)}>Buscar</button>
                </Link>
            </form>
        </div>
    )
};

export default SearchBarComponent;