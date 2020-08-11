import React, {useState} from 'react';
import { AddProductContainer, Form } from './styles';
import { Link } from 'react-router-dom';


export const arrProducts = []

export default function AddProductPage() {
  const [nameProductValue, setNameProductValue] = useState()
  const [priceProductValue, setPriceProductValue] = useState()

  const onChangeName = (event) => {
    setNameProductValue(event.target.value)
  }

  const onChangePrice = (event) => {
    setPriceProductValue(event.target.value)
  }

  const addToCart = (name, price) => {

    try {
      arrProducts.push(
        {
          id: Math.random(),
          name: name,
          price: price,
          photo: 'https://picsum.photos/200/150'
        }
      )
      alert('Produto adicionado com sucesso!')
      console.log(arrProducts)
    } catch (error) {
      alert('Houve um problema ao tentar adicionar o produto')
    }
  }

  return <AddProductContainer>
    <header>
      <Link to="/">
        <a><u>Voltar para lista de produtos</u></a>
      </Link>
    </header>

    <Form>
      <input
        placeholder="Digite o nome do produto"
        value={nameProductValue}
        onChange={onChangeName}
      />

      <input
        type="number"
        placeholder="Digite o preço do produto"
        value={priceProductValue}
        onChange={onChangePrice}
      />

      <button onClick={() => addToCart(nameProductValue, priceProductValue)}>Adicionar</button>
    </Form>
  </AddProductContainer>
}