import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {filterByMaxPopulation, filterByMinPopulation, getAllCountries } from "../../redux/actions";

export default function OrderPopulationComponent() {
    const dispatch = useDispatch()
    const [population, setPopulation] = useState('')

    useEffect(() => {
        if(population !== ''){
            if(population === 'Seleccionar'){
                dispatch(getAllCountries())
            }
            if(population === 'max'){
                dispatch(filterByMaxPopulation())
            }
            if(population === 'min'){
                dispatch(filterByMinPopulation())
            }
        }
    }, [dispatch, population])

    
    function handleOrderPopulation(e) {
        setPopulation(e.target.value)
    }

    return(
        <div>
            <div>
                <select onChange={e => handleOrderPopulation(e)}>
                    <option>Seleccionar</option>
                    <option value="max" >Mayor poblacion</option>
                    <option value="min" >Menor poblacion</option>
                </select>
            </div>
        </div>
    )
}