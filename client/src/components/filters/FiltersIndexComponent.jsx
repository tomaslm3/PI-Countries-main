import React from "react";
import FilterByActivities from "./FilterByActivities";
import FilterByContinentComponent from "./FilterByContinentComponent";
import OrderNamesComponent from "./OrderNamesComponent";
import OrderPopulationComponent from "./OrderPopulationComponent";
import './filterIndexComponent.css'
import RightArrow from '../../assets/arrow-icon-1177.png'
export default function FiltersIndexComponent() {
    return(
        <div className="filters">
            <input id="filtersDisplay" type='checkbox'></input>
            <label className="titleDisplay" htmlFor="filtersDisplay"><h2 className="titleFilters">Filtros </h2><img className="imageRightArrow" src={RightArrow} alt='img not found' width='45px' height='45px'/></label>
            <div className="hiddenFilters">
                <div className="filterContinent">
                    <h3>Continentes</h3>
                    <FilterByContinentComponent />
                </div>
                <div className="filterActivities">
                    <h3>Actividades</h3>
                    <FilterByActivities />
                </div>
                <div className="OrderByName">
                    <h3>Nombres</h3>
                    <OrderNamesComponent/>
                </div>
                <div className="OrderByPopulation">
                    <h3>Poblacion</h3>
                    <OrderPopulationComponent/>
                </div>
            </div>
        </div>
    )
}