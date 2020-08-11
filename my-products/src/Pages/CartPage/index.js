import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


const ModalContainer = styled.div`
  z-index: 2000;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,.5);
  position: fixed;
  top: 0;
  left: 0;
  display: none;
`
const Modal = styled.div`
  background: #fff;
  width: 400px;
  height: 100vh;
  position: absolute;
  right: 0px;
  box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.75);
  animation: modal 0.5s;

  @keyframes modal {
    from {
      opacity: 0;
      transform: translate3d(500px, 0, 0)
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0)
    }
  }

  .close-modal {
    font-size: 32px;
    font-family: Roboto;
    color: white;
    background-color: red;
    border-radius: 50px;
    cursor: pointer;
  }
`

export default function CartPage() {
  const [cart, setCart] = useState([])
  const itemsInCart = localStorage.getItem('cart')

  useEffect(() => {
    if(itemsInCart) {
      setCart(JSON.parse(itemsInCart))
    }
  }, [cart])

  return <ModalContainer id="modal-cart">
    <Modal>
      <span className="close-modal">X</span>
      {cart.map((item) => {
        return (
          <div>
            <p>{item.name}</p>
          </div>
        )
      })}
    </Modal>
  </ModalContainer>
}