import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCountriesByName } from "../../redux/actions"
import { useParams } from 'react-router-dom';
import CardsComponent from "../cards/CardsComponent";

function SearchNameComponent() {
    const dispatch = useDispatch()
    const allCountries = useSelector(state => state.byNameCountries)
    const {name} = useParams();

    useEffect(() => {
        dispatch(getCountriesByName(name))
    }, [dispatch, name])

    return(
        <div>
            <div>
                <h1>Resultados para "{name}"</h1>
            </div>
            <div>
                <CardsComponent allCountries={allCountries}/>
            </div>
        </div>
    )
};

export default SearchNameComponent;