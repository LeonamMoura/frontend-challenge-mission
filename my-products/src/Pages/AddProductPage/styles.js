import styled from 'styled-components'


export const AddProductContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;

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
        
        a {
            color: #000;
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
        height: 40px;
        background: #F1F5F5;
        border: 1px solid #A8E7DB;
        box-sizing: border-box;
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        padding-left: 16px;
        margin-bottom: 20px;
    }

    button {
        width: 100px;
        height: 38px;
        background: transparent;
        border: solid 1px #A8E7DB;
        color: #A8E7DB;
        cursor: pointer;
        transition: 0.8s;

        :hover {
            transition: 0.2s;
            background-color: #A8E7DB;
            color: #fff;
        }
    }
`