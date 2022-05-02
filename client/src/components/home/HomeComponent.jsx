import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../redux/actions";
import CardsComponent from "../cards/CardsComponent";
import FiltersIndexComponent from "../filters/FiltersIndexComponent";
import PaginationComponent from "../pagination/PaginationComponent";
import './homeComponent.css'

function HomeComponent() {
    const dispatch = useDispatch();
    const allCountries = useSelector(state => state.allCountries)
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPages] = useState(10);

    useEffect(() => {
        dispatch(getAllCountries())
    }, [dispatch])

    const indexOfLastItem = currentPage * itemsPerPages;
    const indexOfFirstItem = indexOfLastItem - itemsPerPages;
    const currentItems = allCountries.slice(indexOfFirstItem, indexOfLastItem)


    return(
        <div className="home">
            
            <div className="filters">
                <FiltersIndexComponent/>
            </div>
            <div className="cards">
                <CardsComponent allCountries={currentItems}/>
            </div>
            <div className="pagination">
                <PaginationComponent allCountries={allCountries} itemsPerPages={itemsPerPages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            </div>
        </div>
        
    )
}

export default HomeComponent;