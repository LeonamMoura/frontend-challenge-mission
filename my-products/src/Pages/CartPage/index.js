import React, { useEffect, useState } from 'react'
import {ModalContainer, Modal, ItemInCart} from './styles.js'
import {formatPrice} from '../../util/format'

export default function CartPage() {
  const [cart, setCart] = useState([])
  const itemsInCart = localStorage.getItem('cart')

  useEffect(() => {
    if(itemsInCart) {
      setCart(JSON.parse(itemsInCart))
    }
  }, [itemsInCart])

  function increment(id) {
    console.log(id)
    const productIndex = cart.findIndex((p) => p.id === id);
    if (productIndex !== -1) {
      cart[productIndex].amount += 1;
      setCart([...cart]);
      localStorage.setItem("carrinho", JSON.stringify(cart));
    }

    console.log(cart);
  }

  return <ModalContainer id="modal-cart">
    <Modal>
      {/* <span className="close-modal">X</span> */}
      <header>
        <h2>Meu carrinho</h2>
      </header>

      {cart.map((item) => {
        return (
          <ItemInCart key={item.id}>
            <img src={item.photo} />
            <span>{item.name}</span>
            <span>R${item.price}</span>
            <button>-</button>
            <span>{item.amount}</span>
            <button type="button" onClick={() => increment(item.id)}>+</button>
          </ItemInCart>
        )
      })}

      <div className="footer">
        <span>Total: <strong>{formatPrice(
                cart.reduce((total, product) => {
                  return total + product.price * product.amount;
                }, 0)
              )}</strong></span>
      </div>
    </Modal>
  </ModalContainer>
}