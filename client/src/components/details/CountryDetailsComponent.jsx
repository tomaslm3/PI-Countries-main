import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryById } from "../../redux/actions";

function CountryDetailsComponent() {
    const dispatch = useDispatch();
    const country = useSelector(state => state.country);
    const {name, flags, continents, capital, subregion, area, population, activities} = country;
    let { id } = useParams();
    useEffect(() => {
        dispatch(getCountryById(id))
    }, [dispatch, id])
    return(
        <div>
            <div key={id}>
                <div>
                    <h1>{name}</h1>
                    <img src={flags} alt={name} />
                    <h3>{capital}</h3>
                    <h3>{continents}</h3>
                    <h3>{subregion}</h3>
                    <h3>{area}</h3>
                    <h3>{population}</h3>
                    {activities && activities.map(activity => {
                        return(
                            <h2 key={activity.id}>{activity.name}</h2>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CountryDetailsComponent;