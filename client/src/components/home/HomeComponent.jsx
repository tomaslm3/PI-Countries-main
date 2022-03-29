import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../redux/actions";
import CardsComponent from "../cards/CardsComponent";

function HomeComponent() {
    const dispatch = useDispatch();
    const allCountries = useSelector(state => state.allCountries)

    useEffect(() => {
        dispatch(getAllCountries())
    }, [dispatch])

    return(
        <div>
            <h1>Countries</h1>
            <div className="cards">
                <CardsComponent allCountries={allCountries}/>
            </div>
        </div>
        
    )
}

export default HomeComponent;