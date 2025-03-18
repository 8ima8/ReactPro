import { useState } from 'react'

import React from 'react'
import { Products } from './components/Products'
import {products as initialProducts} from './mocks/products.json'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './context/cart.jsx'




function App() {
  //const [products] =useState(initialProducts)
  const {filters, filterProducts} = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
    <Header />
    <Cart/>
    <Products products={filteredProducts}/>
    {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
