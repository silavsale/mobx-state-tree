import React from 'react';
import { observer } from 'mobx-react'
import {useState} from 'react'
import './App.scss'
import Item from './Item'

function App({invoice}) {
  const [nameInput, setNameInput] = useState('')
  const [quantityInput, setQuantityInput] = useState(0)
  const [priceInput, setPriceInput] = useState(0)

  console.log(invoice);

  return (
    <div className="App">
      <h1>{invoice.currency}</h1>
      <h1>{invoice.status()}</h1>
      { !invoice.is_paid && <button onClick={invoice.markPaid}>Pay</button> }
   
      <form className='paidForm' onSubmit={e => {
        e.preventDefault()
        invoice.itemList.add({
          name: nameInput,
          quantity: parseInt(quantityInput),
          price: parseFloat(priceInput)
        })
        e.target.reset()
        // input.nameInput.focus()
      }}>
        <label htmlFor="name">
          Name
          {/* <input type="text" onInput={input => (setNameInput(input))} id='name'/> */}
          <input type="text" onChange={event => setNameInput(event.target.value)} id='name'/>
        </label>
        <label htmlFor="quantity">
          Quantity
          <input type="number" onChange={event => (setQuantityInput(event.target.value))} id='quantity'/>
        </label>
        <label htmlFor="price">
          Price
          <input type="text" onChange={event => (setPriceInput(event.target.value))} id='price'/>
        </label>
        <button type='submit'>Add</button>
      </form>

      <h2>Total is ${invoice.itemList.total().toFixed(2)}</h2>

      <ul>
        {invoice.itemList.items.map((item, i) =>
          <Item item={item} key={i} />
        )}
      </ul>
    </div>
  );
}

export default observer(App);
