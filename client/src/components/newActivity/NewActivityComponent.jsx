import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getAllCountries, postActivity } from "../../redux/actions";
import validate from "./validators";

function NewActivityComponent() {
    const dispatch = useDispatch()
    const allCountries = useSelector(state => state.allCountries)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getAllCountries())
    }, [dispatch])

    let countriesList = allCountries.map(country => {
        return({
            name:country.name,
            flag: country.flags
        })
    });
    const [selected, setSelected] = useState("");
    const [errors, setErrors] = useState({firstTry: true});
    const [activity, setActivity] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
    })

    function handleChange(e) {
        setActivity({
            ...activity,
            [e.target.name]: e.target.value
        });
        if(!errors.firstTry){
            setErrors(validate({
                ...activity,
                [e.target.name]: e.target.value
            }))
        }
    }

    function handleSeasons(e) {
        if(e.target.value !== 'Seleccionar' && !activity.season.includes(e.target.value)){
            setActivity({
                ...activity,
                season: e.target.value
            })
            if(!errors.firstTry){
            setErrors(validate({
                ...activity,
                season: e.target.value
            }))
            }
        }
    }

    function handleCountries(e) {
        if(e.target.value !== 'Seleccionar' && !activity.countries.includes(e.target.value)){
            setActivity({
                ...activity,
                countries: [...activity.countries, e.target.value]
            })
            if(!errors.firstTry){
            setErrors(validate({
                ...activity,
                countries: [...activity.countries, e.target.value]
            }))
            }
            
        }
    }

    function deleteCountry(e) {
        setActivity({
            ...activity,
            countries: activity.countries.filter(country => country !== e.target.value)
        })
        if(!errors.firstTry){
            setErrors(validate({
                ...activity,
                countries: activity.countries.filter(country => country !== e.target.value)
            }))
        }
    };

    function handleCheckErrors(e) {
        e.preventDefault();
        setErrors(validate({
            ...activity,
            [e.target.name]: e.target.value
        }))
        handleSubmit(e)
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(activity.name && activity.difficulty && activity.duration && activity.season && activity.countries){
        dispatch(postActivity(activity));
        alert('Actividad creada exitosamente');
        setActivity({
            name: '',
                difficulty: '',
                duration: '',
                season: '',
                countries: []
            });
        errors.firstTry = false
        navigate('/home')
        }
        if(errors.firstTry){
            alert('Completar los campos correspondientes')
        }
    }


    return(
        <div>
            <div>
                <h1>Nueva Actividad</h1>
                <form onSubmit={e => handleSubmit(e)}>
                    <div>
                        <div>
                            <label>Nombre</label>
                            <input
                            type='text'
                            name='name'
                            value={activity.name}
                            onChange={e => handleChange(e)}
                            />
                            {errors.name && (<p>{errors.name}</p>)}
                        </div>
                        <div>
                            <label>Dificultad (De 1 a 5)</label>
                            <input
                            type='text'
                            name='difficulty'
                            value={activity.difficulty}
                            onChange={e => handleChange(e)}
                            />
                            {errors.difficulty && (<p>{errors.difficulty}</p>)}
                        </div>
                        <div>
                            <label>Duracion (Formato 24hs)</label>
                            <input
                            type='text'
                            name='duration'
                            value={activity.duration}
                            onChange={e => handleChange(e)}
                            />
                            {errors.duration && (<p>{errors.duration}</p>)}
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <h3>Temporada</h3>
                                <select onChange={e => handleSeasons(e)}>
                                    <option>Seleccionar</option>
                                    <option value='Spring'>Primavera</option>
                                    <option value='Summer'>Verano</option>
                                    <option value='Autumn'>Otoño</option>
                                    <option value='Winter'>Invierno</option>
                                </select>
                                {errors.season && (<p>{errors.season}</p>)}
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>Paises</h3>
                                <select value={selected} onChange={e => [handleCountries(e), setSelected(e)]}>
                                    <option>Seleccionar</option>
                                    {countriesList?.map(country => {
                                        return(
                                            <option key={country.name}>
                                                {country.name}
                                            </option>
                                        )
                                    })}
                                </select>
                                {errors.countries && (<p>{errors.countries}</p>)}
                            </div>
                            <div>
                                {activity.countries.map((country) => {
                                    return(
                                        <div key={country}>
                                            <p>{country}</p>
                                            <button onClick={e => {deleteCountry(e)}} value={country}>X</button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div>
                    {errors.name || 
                    errors.difficulty || 
                    errors.duration || 
                    errors.season || 
                    errors.countries ?
                    <button disabled>Crear Actividad</button>
                    :<button onClick={e => handleCheckErrors(e)}>Crear Actividad</button>}
                    </div>
                </form>
            </div>
        </div>
    )
};

export default NewActivityComponent;