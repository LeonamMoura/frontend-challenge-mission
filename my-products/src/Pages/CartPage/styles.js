import styled from 'styled-components'


export const ModalContainer = styled.div`
  z-index: 2000;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,.5);
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  overflow: auto;
`
export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  width: 600px;
  min-height: 100vh;
  height: 100%;
  position: absolute;
  right: 0px;
  box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.75);
  animation: modal 0.5s;

  @keyframes modal {
    from {
      opacity: 0;
      transform: translate3d(600px, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
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

  header {
    width: 100%;
    height: 40px;
    box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .footer {
    position: fixed;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    max-width: 600px;
    height: 80px;
    background-color: #A8E7DB;
  }
`

export const ItemInCart = styled.div`
  width: 80%;
  height: 100px;
  border: solid 1px #A8E7DB;
  margin-top: 20px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.75);
  img {
    width: 30%;
    height: 100%;
  }
`