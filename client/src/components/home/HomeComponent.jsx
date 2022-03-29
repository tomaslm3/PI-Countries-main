import React from "react";
import CardsComponent from "../cards/CardsComponent";

function HomeComponent() {
    return(
        <div>
            <h1>Countries</h1>
            <div className="cards">
                <CardsComponent />
            </div>
        </div>
        
    )
}

export default HomeComponent;