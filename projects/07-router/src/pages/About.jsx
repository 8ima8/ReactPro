import React from "react";
//import {navi}
import {Link, navigate} from '../Link.jsx'

const i18n ={
    es: {
        title: 'Sobre Nosotros',
        description: 'Hola, Yo soy Fabian y estoy creando un clon de react router',
        button: "Ir a home"
    },
    en: {
        title: 'About',
        description:'Hi, I am Fabian an i am creating a react router clon',
        button:'Go Home'
    }
}

const useI18n =(lang)=>{
    return i18n[lang] || i18n.en
}
export default function AboutPage({routeParams}){
    const i18n =useI18n(routeParams.lang ?? 'es')
    return(
        <div>
            <h1>{i18n.title}</h1>
            <div>
            <img src='https://pbs.twimg.com/profile_images/1359373716422070272/yTpvRQrg_400x400.jpg' alt='Fabians picture'/>
            <p> {i18n.description}</p>
            </div>
            <Link to='/'>{i18n.button}</Link>
        </div>
    )
}
