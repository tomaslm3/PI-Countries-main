import React from "react";
import { Link } from "react-router-dom";
import './cardComponent.css'

function CardComponent({id, name, flags, continents, population, activities}) {
    return(
        <Link to={`/country/${id}`} className='linkToDetails'>
            <div className="card">
                <div key={id}>
                    <img src={flags} alt='img not found' className='flagImg' />
                    <div className="infoCard">
                        <h1 className="title">{name}</h1>
                        <p className="continents">Continente: {continents}</p>
                        <p className="population">Poblacion: {population}</p>
                        <ul>
                        {activities?.map(activity => {
                            return(
                                <li key={activity.id}>Actividades: {activity.name}</li>
                                )
                            })} 
                        </ul>
                    </div>
                </div>

            </div>
        </Link>
    )
}

export default CardComponent;