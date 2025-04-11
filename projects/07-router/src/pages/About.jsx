import React from "react";
//import {navi}
import {Link, navigate} from '../Link.jsx'

export default function AboutPage(){
    return(
        <div>
            <h1>About</h1>
            <div>
            <img src='https://pbs.twimg.com/profile_images/1359373716422070272/yTpvRQrg_400x400.jpg' alt='Fabians picture'/>
            <p> Hi, I am Fabian an i am creating a react router clon</p>
            </div>
            <Link to='/'>Ir a Home</Link>
        </div>
    )
}
