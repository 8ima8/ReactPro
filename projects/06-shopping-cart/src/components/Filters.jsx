import './Filters.css';
import React from 'react';
import { useState } from 'react';
import {useId} from 'react';
import { useFilters } from '../hooks/useFilters.js';


export function Filters(){
    const {filters, setFilters} = useFilters()

    const [minPrice, setMinPrice] = useState(0)

    const minPriceFilterId = useId()
    const categoryFilterId= useId()

    console.log(
        minPriceFilterId,
        categoryFilterId
    )

    const handleChangeMinPrice = (event) =>{
        setFilters(prevState =>({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) =>{
        setFilters(prevState =>({
            ...prevState,
            category: event.target.value
        }))
    }

    return(
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Price</label>  
                <input
                    type="range"
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />  
                <span>{minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Category</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>All</option>
                    <option value='beauty'>Beauty</option>
                    <option value='furniture'>Furniture</option>
                </select>
            </div>
        </section>
    )
}