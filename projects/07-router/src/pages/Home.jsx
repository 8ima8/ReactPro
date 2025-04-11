import React from "react"
import { Link } from "../Link"

export default function HomePage(){
    return(
        <div>
            <h1>Home</h1>
            <p> This page is an example for creating a React Router from scratch</p>
            <Link to='/about'>Ir a Sobre nosotros</Link>
        </div>
    )
}
