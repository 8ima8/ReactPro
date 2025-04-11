import React from "react";
import { Link } from "../Link";

export function Page404(){
    return(
        <>
        <div style={{placeItems:"center"}}>
            <h1> This Should Work</h1>
            <img src="https://media.tenor.com/2E6SQ6csxQsAAAAM/fire-spongebob.gif" alt="bob image burning"/>
            <Link to='/'>Go Back</Link>
        </div>
        </>
    )
}