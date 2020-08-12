import React, { useState, useEffect } from 'react'
import { HomeContainer, ProductsList, ShoppingCartIcon } from './styles'
import { Link } from 'react-router-dom'
import ProductCard from '../../Components/ProductCard'
import CartPage from '../CartPage'
import Logo from '../../Components/Assets/Icons/logo.png'
import AddProductIcon from '../../Components/Assets/Icons/add-product.png'

export default function HomePage() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  

  useEffect(() => {
    const storagedProducts = localStorage.getItem("products")
    const storagedCart = localStorage.getItem("cart")

    if (storagedProducts) {
      setProducts(JSON.parse(storagedProducts));
    }
    if (storagedCart) {
      setCart(JSON.parse(storagedCart));
    }
  }, [])


  const addItemToCart = (id) => {
    const productIndex = products.findIndex(p => p.id === id)
    const findProduct = cart.findIndex(p => p.id === id)

    if (findProduct !== -1) {
      cart[findProduct].amount += 1
      setCart([...cart])
      localStorage.setItem('cart', JSON.stringify(cart))
      console.log('chegou no if')
    } else {
      products[productIndex].amount += 1
      setCart([...cart, products[productIndex]])
      localStorage.setItem('cart', JSON.stringify(cart))
      console.log('chegou no else')
    }

    console.log(cart)

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
      <img src={Logo}/>

      <Link to="/add-product">
        <div>
          <img src={AddProductIcon} className="add-product"/>
          <span>Cadastrar produto</span>
        </div>
      </Link>
    </header>

    <ProductsList>
      {products.map(product =>
        <ProductCard
          name={product.name}
          price={product.price}
          photo={product.photo}
          addToCart={() => addItemToCart(product.id)}
        />
      )}
    </ProductsList>
    
    <ShoppingCartIcon onClick={() => startModal('modal-cart')}/>

    <CartPage/>

  </HomeContainer>
}