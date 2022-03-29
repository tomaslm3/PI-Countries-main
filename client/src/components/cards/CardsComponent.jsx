import React from "react";
import CardComponent from "../card/CardComponent";

function CardsComponent({allCountries}) {
    return(
        <div className="cards">
            {allCountries && allCountries.map((country) => {
                return(
                    <CardComponent
                    key={country.id}
                    id={country.id}
                    name={country.name}
                    flags={country.flags}
                    continents={country.continents}
                    population={country.population}
                    activities={country.activities}
                    />
                )
            })}
        </div>
    )
}
export default CardsComponent;