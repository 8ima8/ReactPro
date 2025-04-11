import React, { useEffect } from "react";

export function SearchPage({routeParams}){

    useEffect(()=>{
        document.title = `You've searched ${routeParams.query}`

       // fetch(`https://api.ajdsskadkasd.com/search/${routeParams.query}`)

    },[])



    return(
        <h1>You've searched {routeParams.query}</h1>
    )
}