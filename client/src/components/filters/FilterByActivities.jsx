import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByActivities, getAllActivities } from "../../redux/actions";

export default function FilterByActivities() {
    const dispatch = useDispatch()
    const allActivities = useSelector(state => state.allActivities)
    const [activities, setActivities] = useState([])

    useEffect(() => {
        dispatch(getAllActivities())
        dispatch(filterByActivities(activities))
    }, [dispatch, activities])


    function handleActivities(e) {
        if(e.target.value !== 'Seleccionar' && !activities.includes(e.target.value)){
            setActivities([...activities, e.target.value])
        }
    }
    function handleDeleteActivities(e) {
        setActivities(activities.filter(activity => activity !== e.target.value))
    }

    return(
        <div>
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