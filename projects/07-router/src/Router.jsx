import React, { Children } from "react"
import { EVENTS } from './consts'
import { useState,useEffect } from "react"
import {match} from 'path-to-regexp'



export function Router({children, routes=[],defaultComponent:DefaultComponent = () => <h1>Error 404</h1>}){
    console.log(children)

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

    //add routes from children <route/> components
    const routesFromChildren = Children.map(children,({props,type}) =>{
        const {name} =type
        const isRoute = name === 'Route'


        return isRoute ? props : null
    })

    const routesToUse = routes.concat(routesFromChildren)

    const Page = routesToUse.find(({path}) =>{
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