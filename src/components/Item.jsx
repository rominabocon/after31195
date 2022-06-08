import React from 'react'
import ItemCount from './ItemCount'
import style from './Item.module.css'

function Item({id, name, image, stock}) {
  return (
    <div className={style.container} >
        <h1>{name}</h1>
        <img src={image} alt={id} />
        <ItemCount stock={stock}/>
    </div>
  )
}

export default Item