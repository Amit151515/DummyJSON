import React, { useState } from 'react'
import Navbar from './Navbar'
import './Main.scss'
import Paginate from './Paginate'
import Products from './Products'



const Main = () => {
  const [name, setName] = useState(false)
    const [price, setPrice] = useState(false)
    const [stock, setStock] = useState(false)
  const [value, setValue] = useState('')

const addName = () => {
  setName(true)
  setPrice(false)
  setStock(false)
  setValue('title')
}
const addPrice = () => {
  setName(false)
  setPrice(true)
  setStock(false)
  setValue('price')
}
const addStock = () => {
  setName(false)
  setPrice(false)
  setStock(true)
  setValue('stock')
}
const addAll = () => {
  setName(false)
  setPrice(false)
  setStock(false)
  setValue('')
}

  return (
    <>
    <Navbar/>
    <div className="main">
        <div className="container">
            <div className="main__box">
              <h2 className="main__title head_title">Сортировка</h2>
            <div className="main__box-catalog">
                <ul className="main__box-catalog-list">
                <button className={`main__box-catalog-value ${value === '' ? 'active' : ''}`} onClick={addAll}>All</button>
                <button className={`main__box-catalog-value ${name ? 'active' : ''}`} onClick={addName}>Title</button>
                <button className={`main__box-catalog-value ${price ? 'active' : ''}`} onClick={addPrice}>Price</button>
                <button className={`main__box-catalog-value ${stock ? 'active' : ''}`} onClick={addStock}>Count</button>
                </ul>
            </div>
            <h2 className="main__title head_title">Товары</h2>
            <Products value={value}/>
            </div>
        </div>
        <Paginate/>
    </div>
    </>
  )
}

export default Main