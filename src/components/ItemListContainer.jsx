import React, { useEffect, useState } from 'react'
import customFetch from '../utils/customFetch'
import productos from '../utils/productos'
import ItemList from './ItemList'
import s from './ItemListContainer.module.css'

function ItemListContainer() {
    const [items, setItems] = useState([])

    useEffect(() => {
        customFetch(3000, productos)
        .then(r => setItems(r))
    }, [items])


  return (
    <div className={s.container}>
        <ItemList products= {items}/>
    </div>
  )
}

export default ItemListContainer