import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import s from './FoundItem.module.scss'

const FoundItem = () => {
  const { id } = useParams()
  const [value, setValue] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const getProductId = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await response.json()
        setValue(data)
        setCurrentImageIndex(0)
      } catch (error) {
        console.log(error)
      }
    }

    getProductId()
  }, [id])

  const handleNextImage = () => {
    if (value?.images?.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % value.images.length)
    }
  }

  const handlePrevImage = () => {
    if (value?.images?.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + value.images.length) % value.images.length)
    }
  }

  return (
    <div className={s.product}>
      {value ? (
        <div key={value.id} className={s.product__item}>
          <div className={s.product__carousel}>
            {value.images?.length > 1 && (
              <button
                className={`${s.carousel__arrow} ${s.left}`}
                onClick={handlePrevImage}
              >
                ←
              </button>
            )}

            <img
              src={value.images?.[currentImageIndex] || value.thumbnail}
              alt={`Изображение ${currentImageIndex + 1}`}
              className={s.product__item_img}
            />

            {value.images?.length > 1 && (
              <button
                className={`${s.carousel__arrow} ${s.right}`}
                onClick={handleNextImage}
              >
                →
              </button>
            )}
          </div>

          <div className={s.product__item_box}>
            <div className={s.product__item_box_span}>
              -{value.discountPercentage}%
            </div>
          </div>

          <h3 className={s.product__item_title}>{value.title}</h3>

          <p className={s.product__item_text}>
            Цена: <span className={s.old_prices}>{value.price}$</span>
          </p>

          <p className={s.product__item_text}>
            Цена со скидкой:{' '}
            <span className={s.new_prices}>
              {(value.price - (value.price * value.discountPercentage) / 100).toFixed(2)}$
            </span>
          </p>

          <p className={s.product__item_text}>Описание: {value.description}</p>
          <p className={s.product__item_text}>Категория: {value.category}</p>
          <p className={s.product__item_text}>Рейтинг: {value.rating}</p>
          <p className={s.product__item_text}>Бренд: {value.brand}</p>
          <p className={s.product__item_text}>Осталось: {value.stock} шт.</p>

          <Link to="/find" className={s.product__item_box_link}>Назад</Link>
        </div>
      ) : (
        <h2 className={s.loader}>Загрузка...</h2>
      )}
    </div>
  )
}

export default FoundItem
