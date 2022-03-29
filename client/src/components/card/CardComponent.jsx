import React from "react";
import { Link } from "react-router-dom";

function CardComponent({id, name, flags, continents, population, activities}) {
    return(
        <Link to={`/country/${id}`}>
            <div className="card">
                <div key={id}>
                    <img src={flags} alt='img not found' className='flagImg' />
                    <h1 className="title">{name}</h1>
                    <p className="continents">{continents}</p>
                    <p className="population">{population}</p>
                    <ul>
                    {activities.map(activity => {
                        return(
                            <li key={activity.id}>{activity.name}</li>
                            )
                            })} 
                    </ul>
                </div>

            </div>
        </Link>
    )
}

export default CardComponent;