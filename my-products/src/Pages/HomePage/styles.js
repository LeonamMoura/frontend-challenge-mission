import styled from 'styled-components'

export const HomeContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #1d1e1d;
    display: flex;
    flex-direction: column;
    align-items: center;


    header {
        width: 100vw;
        height: 100px;
        background: #1d1e1d;
        position: sticky;
        top: 0;
        border-bottom: solid 1px #05FF2D;
        display: flex;
        justify-content: space-around;
        align-items: center;

        input {
            width: 300px;
            height: 38px;
            background: transparent;
            border: solid 1px #05FF2D;
            color: #05FF2D;
            padding-left: 16px;
        }
        
        a {
            color: #05FF2D;
            cursor: pointer;
        }
    }
   
`


export const ProductsList = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    margin-top: 20px;
    align-items: center;
    

    div {
        width: 200px;
        height: 300px;
        border: solid 1px #05FF2D;
        margin: 20px;
        color: white;
        border-radius: 8px;

        img {
            border-radius: 8px;
        }
    }
`

