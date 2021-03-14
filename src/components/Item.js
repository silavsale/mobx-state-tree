import React from 'react'
import { observer } from 'mobx-react'
import './Item.scss'


const Item = ({item}) => (
    <li className='item'>
        {item.name}: {item.quantity} * ${item.price.toFixed(2)} = ${item.total().toFixed(2)}
        <button className='button-item' onClick={item.decrement}>-</button>
        <button className='button-item' onClick={item.increment}>+</button>
        <button className='button-item' onClick={item.remove}>X</button>
    </li>
)

export default observer(Item)