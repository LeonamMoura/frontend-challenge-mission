import React from 'react'
import styled from 'styled-components'



const CardContainer = styled.div`
    position: relative;
    width: 200px;
    height: 250px;
    background: #FAFFFE;
    border: 1px solid #E2EEEB;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 20px;
    border: solid 1px #A8E7DB;
    border-bottom: none;

    :hover {
        box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.35);
    }

    

    img {
        position: relative;
        top: 0;
        width: 200px;
        height: 150px;
    }

    footer {
        cursor: pointer;
        position: absolute;
        bottom: 0px;
        background-color: #8BBA7B;
        width: 100%;
        height: 20px;
        text-align: center;
        color: #fff;
        transition: 0.5s;

        :hover {
            background-color: #67DA3F;
            transition: 0.5s;
            height: 30px;

            padding-top: 20px;
        }
    }
`

export default function ProductCard({name, price, photo, addToCart}) {
  return <CardContainer>
      <img src={photo}/>
      <p>{name}</p>
      <p>R$ {price}</p>

      <footer onClick={addToCart}>
          Adicione ao carrinho
      </footer>
  </CardContainer>
}