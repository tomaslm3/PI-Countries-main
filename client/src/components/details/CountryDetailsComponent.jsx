import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryById } from "../../redux/actions";
import './countryDetailsComponent.css'

function CountryDetailsComponent() {
    const dispatch = useDispatch();
    const country = useSelector(state => state.country);
    const {name, flags, continents, capital, subregion, area, population, activities} = country;
    let { id } = useParams();
    useEffect(() => {
        dispatch(getCountryById(id))
    }, [dispatch, id])
    return(
        <div className="details">
            <img className="detailImg" src={flags} alt={name} />
            <div className="detailCard" key={id}>
                <div>
                    <div className="countryInfo">
                        <h1>Pais:</h1>
                        <h1 className="detailTitle">{name}</h1>                        
                    </div>
                    <div className="countryInfo">
                        <h3>Capital:</h3>
                        <h3 className="detailCapital">{capital}</h3>                      
                    </div>
                    <div className="countryInfo">
                        <h3>Continente:</h3>
                        <h3 className="detailContinent">{continents}</h3>                       
                    </div>
                    <div className="countryInfo">
                        <h3>Subregion:</h3>
                        <h3 className="detailSubregion">{subregion}</h3>                       
                    </div>
                    <div className="countryInfo">
                        <h3>Area:</h3>
                        <h3 className="detailArea">{area}</h3>   
                    </div>
                    <div className="countryInfo">
                        <h3>Poblacion:</h3>
                        <h3 className="detailPopulation">{population}</h3>        
                    </div>
                    <div className="countryInfo">
                        <h2>Actividades:</h2>
                        <div className="detailActivities">

                        {activities && activities.map(activity => {
                            return(
                                <h2  key={activity.id}>{activity.name}</h2>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryDetailsComponent;