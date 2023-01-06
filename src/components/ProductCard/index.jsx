import React from 'react'
import { MoneyContext } from '../../context/MoneyContext';
import style from './product_card.module.css';

function ProductCard(card_obj) {

  let cardObj = card_obj.card;
  let localMoney = React.useContext(MoneyContext).money;
  let setMoney = React.useContext(MoneyContext).setMoney;

  let [count,setCount] = React.useState(0);


  function handleBuyButton(e) {
    e.preventDefault()
    setMoney(localMoney - cardObj.price);
    setCount(count+=1)

  }

  function handleSellButton(e){
    e.preventDefault()
      setMoney(localMoney + cardObj.price);
      setCount(count-=1)
  }

  return (
    // Product Card
    <MoneyContext.Consumer>
    {val => 
    <div className={style.product_card}>
      <img className='' src='https://loremflickr.com/500/600' alt="" />
      {/* Title Section */}
      <div className={style.title_section}>
        <h5 className='font-bold'>{cardObj.title}</h5>
        <span className=''>${cardObj.price}</span>
      </div>

      {/* Buttons Section */}
      <div className={style.buttons_section}>
        <button className={style.buttons} onClick={e => {handleBuyButton(e)}}>Buy</button>
        <span className='text-2xl'>{count}</span>
        <button className={style.buttons} onClick={e => {handleSellButton(e)}}>Sell</button>
      </div>
    </div>}
    </MoneyContext.Consumer>
  )
}

export default ProductCard