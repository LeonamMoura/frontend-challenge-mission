import React, {useState} from 'react'
import {HomeContainer, ProductsList} from './styles'
import { Link } from 'react-router-dom'
import {arrProducts} from '../AddProductPage'

export const cart = []

export default function HomePage() {
  
  
  const addItemToCart = (product) => {
    cart.push(product)
    console.log(cart)
  }


  return <HomeContainer>
    <header>
      <Link to="/add-product">
        <a><u>Adicionar novo produto</u></a>
      </Link>

      <input placeholder="Buscar produto por nome"/>

      <Link to="/cart">
        <a><u>Ver carrinho</u></a>
      </Link>
    </header>

    <ProductsList>
      {arrProducts.map(product => {
        return <div id={product.id}>
          <img src={product.photo}/>
          <h3>{product.name}</h3>
          <h5>R$ {product.price}</h5>

          <footer onClick={() => addItemToCart(product)}>
            Adicionar ao carrinho
          </footer>
        </div>
      })}
    </ProductsList>
  </HomeContainer>
}