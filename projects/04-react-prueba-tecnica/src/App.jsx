import { useState, useEffect } from "react"
import './App.css'
import { getRandomFact } from "./services/fact"
import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact"
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`
export function App (){
    const {fact, refreshRandomFact} = useCatFact()
    const {imageUrl} = useCatImage({ fact })
    
    const [factError,setFactError]=useState()

    const handleClick = async () =>{
        refreshRandomFact()

    }

    return(
        <main>
            <h1>App de Gatos</h1>

            <button onClick={handleClick}>Get new fact</button>
           {fact && <p>{fact}</p>} 
           {imageUrl && <img src={imageUrl} alt={`Image
            extracted using the first three words for ${fact}`}/>}
        </main>
    )
}