import styled from 'styled-components'
import CartIcon from '../../Components/Assets/Icons/shopping-cart.svg'

export const HomeContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;

    header {
        z-index: 1;
        position: sticky;
        top: 0;
        width: 100%;
        height: 80px;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: space-around;
        align-items: center;

        input {
            width: 300px;
            height: 40px;
            background: #F1F5F5;
            border: 1px solid #A8E7DB;
            box-sizing: border-box;
            box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            padding-left: 16px;
        }
        
        a {
            color: #05FF2D;
            cursor: pointer;
        }
    }
   
`


export const ProductsList = styled.section`
    width: 1000px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-left: 100px;
`

export const ShoppingCartIcon = styled.span`
    position: fixed;
    right: 5%;
    bottom: 10%;
    width: 50px;
    height: 50px;
    background-image: url(${CartIcon});
    cursor: pointer;
`

