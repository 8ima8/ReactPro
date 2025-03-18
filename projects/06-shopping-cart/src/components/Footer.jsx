import React from 'react';
import './Footer.css';
import { useFilters } from '../hooks/useFilters';
import { useCart } from '../hooks/useCart';

export function Footer (){
    //const {filters} = useFilters()
    //const {cart} = useCart()
    return(
        <footer className="footer">

            {
            <>
            <h4>Prueba Carrito React - <span>@8ima8</span></h4>
            <h5>Shopping Cart con useContext & useReducer </h5>
            </>
            }

        </footer>
    )
}