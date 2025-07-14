import React from 'react'
import { useSelector } from 'react-redux'
import './Products.scss'
import { Link } from 'react-router-dom'

const Products = ({ value }) => {
  const { data } = useSelector((store) => store.products)

  const sortedData = data && [...data].sort((a, b) => {
    if (value === 'title') {
      return a.title.localeCompare(b.title)
    }
    if (value === 'price') {
      return a.price - b.price
    }
    if (value === 'stock') {
      return a.stock - b.stock
    }
    return 0 
  })

  return (
    <div className="products">
      {sortedData && sortedData.length > 0 ? (
        sortedData.map((i) => (
          <div key={i.id} className="products__item">
            <img src={i.thumbnail} alt={i.title} className="products__item-img" />

            <div className="products__item-box">
              <div className="products__item-box-span">-{i.discountPercentage}%</div>
            </div>

            <h3 className="products__item-title">{i.title}</h3>

            <p className="products__item-text">Цена: <span className="old-price">{i.price}$</span></p>
            <p className="products__item-text">
              Цена со скидкой: <span className="new-price">
                {(i.price - (i.price * i.discountPercentage / 100)).toFixed(2)}$
              </span>
            </p>

            <p className="products__item-text">Описание: {i.description}</p>
            <p className="products__item-text stock">Осталось: {i.stock} шт.</p>
            <Link to={`/find/${i.id}`} className="products__item-box-link">Подробнее</Link>
          </div>
        ))
      ) : (
        <h2 className="loader">Loading</h2>
      )}
    </div>
  )
}

export default Products
