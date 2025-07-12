import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './FondItem.scss'
const FoundItem = () => {
  const { id } = useParams()
  const [value, setValue] = useState(null)

  const getProductId = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`)
      const data = await response.json()
      setValue(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProductId()
  }, [id])

  return (
    <>
      <div className="product">
        {value ? (
          <div key={value.id} className="product__item">
            <img
              src={value.thumbnail}
              alt={value.title}
              className="product__item-img"
            />

            <div className="product__item-box">
              <div className="product__item-box-span">
                -{value.discountPercentage}%
              </div>
            </div>

            <h3 className="product__item-title">{value.title}</h3>

            <p className="product__item-text">
              Цена: <span className="old-prices">{value.price}$</span>
            </p>
            <p className="product__item-text">
              Цена со скидкой:{' '}
              <span className="new-prices">
                {(value.price - (value.price * value.discountPercentage) / 100).toFixed(2)}$
              </span>
            </p>

            <p className="product__item-text">Описание: {value.description}</p>
            <p className="product__item-text">Категория: {value.category}</p>
            <p className="product__item-text">Рейтинг: {value.rating}</p>
            <p className="product__item-text">Бренд: {value.brand}</p>
            <p className="product__item-text">Осталось: {value.stock} шт.</p>
            <Link to="/find" className="product__item-box-link">Назад</Link>
          </div>
        ) : (
          <h2>Загрузка...</h2>
        )}
      </div>
    </>
  )
}

export default FoundItem