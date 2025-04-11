import React from "react"
import { EVENTS } from './consts'
import { useState,useEffect } from "react"
import {match} from 'path-to-regexp'



export function Router({routes=[],defaultComponent:DefaultComponent = () => <h1>Error 404</h1>}){

    const [currentPath, SetCurrentPath] = useState(window.location.pathname)

    useEffect(()=>{
    const onLocationChange = () =>{
        SetCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE,onLocationChange)

    return() =>{
        window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
        window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }

    },[])

    let routeParams = {}

    const Page = routes.find(({path}) =>{
        if(path === currentPath) return true

        //hemos usado path-to-regexp
        // para poder detectar rutas dinamicas como por ejemplo
        // /search/:query <- :query es una ruta dinamica
        const matcherUrl= match(path,{devode:decodeURIComponent})
        const matched = matcherUrl(currentPath)
        if(!matched) return false


        //guardar los parametros from url  que eran dinamicos
        //y que hemos extraido con path to regexp
        //por ejemplo, si la ruta es /search/:query
        //yla url es /search/javascript
        //matched.params.query === 'javascript'
        routeParams = matched.params //{query: 'javascript'}// para ruta /search/javascript
        return true



    })?.Component



    return Page 
    ? <Page routeParams={routeParams}/> 
    : <DefaultComponent/>

    
}