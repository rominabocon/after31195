import React from 'react'
import { Link } from 'react-router-dom'
import style from './Item.module.css'

function Item({id, name, image, price}) {
  return (

    <div className={style.container}>
    <h2>{name}</h2>

    <div className={style.card}>
      <img src={image} alt={id} />
     
      <p className={style.price}>{price}</p>
    
      <Link className={style.buttonCard} to={`/detail/${id}`}>Ver Detalle</Link>
    </div>
    
  </div>
  )
}

export default Item