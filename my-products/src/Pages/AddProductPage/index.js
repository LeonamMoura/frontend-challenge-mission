import React, {useState, useEffect} from 'react';
import { AddProductContainer, Form } from './styles';
import { Link } from 'react-router-dom';


export default function AddProductPage() {
  const [products, setProducts] = useState([])
  const [nameProductValue, setNameProductValue] = useState('')
  const [idProductValue, setIdProductValue] = useState()
  const [priceProductValue, setPriceProductValue] = useState()
  const storage = localStorage.getItem("products");

  useEffect(() => {
    if (storage) {
      setProducts(JSON.parse(storage));
    }
  }, [])

  const onChangeName = (event) => {
    setNameProductValue(event.target.value)
  }

  const onChangeId = (event) => {
    setIdProductValue(event.target.value)
  }

  const onChangePrice = (event) => {
    setPriceProductValue(event.target.value)
  }

  const addToProductList = (name, price, id) => {

    try {
      products.push(
        {
          id: id,
          name: name,
          price: price,
          photo: 'https://picsum.photos/200/150',
          amount: 0
        }
      )

      localStorage.setItem('products', JSON.stringify(products))

      alert('Produto adicionado com sucesso!')
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
        id='name-product'
        placeholder="Digite o nome do produto"
        value={nameProductValue}
        onChange={onChangeName}
      />

      <input
        id='price-product'
        type="number"
        placeholder="Digite o preço do produto"
        value={priceProductValue}
        onChange={onChangePrice}
      />

      <input
        id='price-product'
        type="number"
        placeholder="Digite o id do produto"
        value={idProductValue}
        onChange={onChangeId}
      />

      <button onClick={() => addToProductList(nameProductValue, priceProductValue, idProductValue)}>Adicionar</button>
    </Form>
  </AddProductContainer>
}