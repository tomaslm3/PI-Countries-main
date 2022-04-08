import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../redux/actions";

function FormsLogic() {
    const dispatch = useDispatch()
    const allCountries = useSelector(state => state.allCountries)

    useEffect(() => {
        dispatch(getAllCountries())
    }, [dispatch])

    const countries = () => {
        let countriesList = allCountries.map(country => country.name);
    }

    return(
        <div>

        </div>
    )
}

export default FormsLogic;