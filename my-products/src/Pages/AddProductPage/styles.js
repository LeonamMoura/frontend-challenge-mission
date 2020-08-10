import styled from 'styled-components'


export const AddProductContainer = styled.div`
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
        
        a {
            color: #05FF2D;
            cursor: pointer;
        }
    }
   
`

export const Form = styled.div`
    width: 600px;
    height: 400px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
        width: 300px;
        height: 38px;
        background: transparent;
        border: solid 1px #05FF2D;
        color: #05FF2D;
        padding-left: 16px;
        margin-bottom: 20px;
    }

    button {
        width: 100px;
        height: 38px;
        background: transparent;
        border: solid 1px #05FF2D;
        color: #05FF2D;
        cursor: pointer;
        transition: 0.8s;

        :hover {
            transition: 0.2s;
            background-color: #05FF2D;
            color: #1d1e1d;
        }
    }
`