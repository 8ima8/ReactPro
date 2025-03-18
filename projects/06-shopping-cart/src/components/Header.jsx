import { Filters } from './Filters.jsx';
import React from 'react'

export function Header (){
    return (
        <header>
            <h1>React shop 🛒</h1>
            <Filters />
        </header>
    )
}