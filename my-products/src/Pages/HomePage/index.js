import React, {useState} from 'react'
import {HomeContainer, ProductsList} from './styles'
import { Link } from 'react-router-dom'
import {arrProducts} from '../AddProductPage'



export default function HomePage() {
  

  return <HomeContainer>
    <header>
      <Link to="/add-product">
        <a><u>Adicionar novo produto</u></a>
      </Link>

      <input placeholder="Buscar produto por nome"/>

      <a><u>Meu carrinho</u></a>
    </header>

    <ProductsList>
      {arrProducts.map(product => {
        return <div>
          <img src={product.photo}/>
          <h3>{product.name}</h3>
          <h5>R$ {product.price}</h5>
        </div>
      })}
    </ProductsList>
  </HomeContainer>
}