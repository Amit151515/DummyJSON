import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../store/products/ProductSlice';
import './Found.scss'
import { Link } from 'react-router-dom'

const Found = () => {

    const {data} = useSelector((store) => store.product)

    const [value, setValue] = useState('');
    const [query, setQuery] = useState('');

    const dispatch = useDispatch()


    const handleClick = () => {
      setQuery(value);
      setValue('');
    };

    useEffect(() => {
        dispatch(getProduct(query))
    }, [query])
    

  return (
    <>
    <Navbar/>
    <div className='form'>
      <input
      className='form__input'
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className='form__button' onClick={handleClick}>Найти</button>
    </div>
    <div className="container">
    <div className="products">
    
      {data && data.length > 0 ? (
        data.map((i) => (
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
            <p className="products__item-text">Осталось: {i.stock} шт.</p>
            <Link to={`/find/${i.id}`} className="products__item-box-link">Подробнее</Link>
          </div>
        ))
      ) : (
        <h2>Загрузка...</h2>
      )}
    </div>
    </div>
    </>
  )
}

export default Found