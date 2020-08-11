import React from 'react';
import { CartContainer } from './styles';
import { Link } from 'react-router-dom';
import {cart} from '../HomePage'

function CartPage() {
  return <CartContainer>
    <header>
      <Link to="/">
        <a><u>Voltar para lista de produtos</u></a>
      </Link>
    </header>
    
    <h2>Meu Carrinho</h2>

    {cart.map(item => {
      return <div>
        <img src={item.photo} />
        <span>{item.name}</span>
      </div>
    })}
  </CartContainer>
}

export default CartPage;