import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByActivities, filterByContinent, filterByMaxPopulation, filterByMinPopulation, filterByNameAsc, filterByNameDesc, getAllActivities, getAllCountries } from "../../redux/actions";

export default function FiltersComponent() {
    const dispatch = useDispatch()
    const countries = useSelector(state => state.allCountries)
    const allActivities = useSelector(state => state.allActivities)
    const [alphabet, setAlphabet] = useState('')
    const [population, setPopulation] = useState('')
    const [continent, setContinent] = useState('')
    const [activities, setActivities] = useState([])


    useEffect(() => {
        dispatch(getAllCountries())
        dispatch(getAllActivities())

        if(alphabet !== ''){
            if(alphabet === 'Seleccionar'){
                dispatch(getAllCountries())
            }
            if(alphabet === 'asc'){
                dispatch(filterByNameAsc())
            }
            if(alphabet === 'desc'){
                dispatch(filterByNameDesc())
            }
        }
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
        if(continent !== ''){
            if(continent === 'Seleccionar'){
                dispatch(getAllCountries())
            } else {
                dispatch(filterByContinent(continent))
            }
        }
    }, [dispatch, alphabet, population, continent])

    useEffect(() => {
        searchActivities()
    }, [activities])


    const continents = () => {
        let continentsList = countries.map(country => country.continents)
        let continents = continentsList.filter((continent, index) => {
            return continentsList.indexOf(continent) === index;
        });
        return continents
    }

    function handleOrderName(e) {
         setAlphabet(e.target.value)
    }
    
    function handleOrderPopulation(e) {
        setPopulation(e.target.value)
    }

    function handleByContinent(e) {
        setContinent(e.target.value)
    }

    function handleActivities(e) {
        if(e.target.value !== 'Seleccionar' && !activities.includes(e.target.value)){
            setActivities([...activities, e.target.value])
        }
    }
    function handleDeleteActivities(e) {
        setActivities(activities.filter(activity => activity !== e.target.value))
    }

    function searchActivities(){
        dispatch(filterByActivities(activities))
    }
    return(
        <div>
            <div>
                <select onChange={e => handleOrderName(e)}>
                    <option>Seleccionar</option>
                    <option value="asc" >Ascendente</option>
                    <option value="desc" >Descendente</option>
                </select>
            </div>
            <div>
                <select onChange={e => handleOrderPopulation(e)}>
                    <option>Seleccionar</option>
                    <option value="max" >Mayor poblacion</option>
                    <option value="min" >Menor poblacion</option>
                </select>
            </div>
            <div>
                <select onChange={e => handleByContinent(e)}>
                    <option>Seleccionar</option>
                    {continents().map(cont => {
                        return(
                            <option key={cont} value={cont}>{cont}</option>
                        )
                    })}
                    
                </select>
            </div>
            <div>
                <div>
                    <select onChange={e => handleActivities(e)}>
                        <option>Seleccionar</option>
                        {allActivities.map(acti => {
                            return(
                                <option key={acti.name} value={acti.name}>{acti.name}</option>
                                )
                            })}
                    </select>
                </div>
                <div>
                    {activities.map((activity) => {
                        return(
                            <div key={activity}>
                                <p>{activity}</p>
                                <button onClick={e => handleDeleteActivities(e)} value={activity}>X</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}