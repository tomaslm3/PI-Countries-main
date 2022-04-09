import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../redux/actions";
import CardsComponent from "../cards/CardsComponent";
import PaginationComponent from "../pagination/PaginationComponent";

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
        <div>
            <h1>Countries</h1>
            <div className="cards">
                <CardsComponent allCountries={currentItems}/>

                <div>
                    <PaginationComponent allCountries={allCountries} itemsPerPages={itemsPerPages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
                </div>
            </div>
        </div>
        
    )
}

export default HomeComponent;