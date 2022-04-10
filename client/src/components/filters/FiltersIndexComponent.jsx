import React from "react";
import FilterByActivities from "./FilterByActivities";
import FilterByContinentComponent from "./FilterByContinentComponent";
import OrderNamesComponent from "./OrderNamesComponent";
import OrderPopulationComponent from "./OrderPopulationComponent";

export default function FiltersIndexComponent() {
    return(
        <div>
            <div>
                <FilterByContinentComponent />
            </div>
            <div>
                <FilterByActivities />
            </div>
            <div>
                <OrderNamesComponent/>
            </div>
            <div>
                <OrderPopulationComponent/>
            </div>
        </div>
    )
}