import React, { useState, useEffect } from 'react'
import { HomeContainer, ProductsList, ShoppingCartIcon } from './styles'
import { Link } from 'react-router-dom'
import ProductCard from '../../Components/ProductCard'
import CartPage from '../CartPage'

export default function HomePage() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  const storagedProducts = localStorage.getItem("products")
  const storagedCart = localStorage.getItem("cart")

  useEffect(() => {
    if (storagedProducts) {
      setProducts(JSON.parse(storagedProducts));
    }
    if (storagedCart) {
      setCart(JSON.parse(storagedCart));
    }
  }, [])


  const addItemToCart = (product) => {
    cart.push(product)
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  const startModal = (modalID) => {
    const modal = document.getElementById(modalID)
    modal.classList.add('mostrar')
    modal.addEventListener('click', (event) => {
      if (event.target.id == modalID || event.target.className == 'close-modal') {
        modal.classList.remove('mostrar')
      }
    })
  }

  
  return <HomeContainer>
    <header>
      <Link to="/add-product">
        <a><u>Adicionar novo produto</u></a>
      </Link>

      <input placeholder="Buscar produto por nome" />

      
    </header>

    <ProductsList>
      {products.map(product =>
        <ProductCard
          name={product.name}
          price={product.price}
          photo={product.photo}
          addToCart={() => addItemToCart(product)}
        />
      )}
    </ProductsList>
    
    <ShoppingCartIcon onClick={() => startModal('modal-cart')}/>

    <CartPage
      estado={cart}
    />

  </HomeContainer>
}