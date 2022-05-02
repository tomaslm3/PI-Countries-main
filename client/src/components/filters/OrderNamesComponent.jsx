import React, { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import {filterByNameAsc, filterByNameDesc, getAllCountries} from "../../redux/actions";

export default function OrderNamesComponent() {
    const dispatch = useDispatch()
    const [alphabet, setAlphabet] = useState('')

    useEffect(() => {
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
        
    }, [dispatch, alphabet])


    function handleOrderName(e) {
         setAlphabet(e.target.value)
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
        </div>
    )
}