import React, { useContext, useEffect, useRef } from 'react'
import { MoneyContext } from '../../context/MoneyContext';
import style from './product_card.module.css';

function ProductCard({card}) {
  const {money,spendMoney,gainMoney} = useContext(MoneyContext);
  const answer = money - card.price;

  const buyButton = useRef();
  const sellButton = useRef();

  let [count,setCount] = React.useState(0);

  function handleBuyButton(e) {
    e.preventDefault();
    if(answer < 0) return
    spendMoney(card.price);
    setCount(count+=1)
  }

  function handleSellButton(e){
    e.preventDefault();
    console.log(answer);
    if(count === 0) return
    gainMoney(card.price);
    setCount(count-=1);
  }

  useEffect(() => {
    if(count === 0 ) sellButton.current.disabled = true;
    else {sellButton.current.disabled = false;}
    if(answer < 0) buyButton.current.disabled = true;
    else {buyButton.current.disabled = false;}
  },[count,answer])
  return (
      <div className={style.product_card}>
        <div className='w-full h-[12rem] overflow-hidden'>
          <img className='w-full h-full object-contain' src={card.images[0]} alt="" />
        </div>
        <div className={style.title_section}>
          <h5>{card.title}</h5>
          <span className='font-semibold'>${card.price}</span>
        </div>

        <div className={style.buttons_section}>
          <button ref={buyButton} className={style.buttons} onClick={e => {handleBuyButton(e)}}>Buy</button>
          <span className='text-2xl'>{count}</span>
          <button ref={sellButton} className={style.buttons} onClick={e => {handleSellButton(e)}}>Sell</button>
        </div>
      </div>
  )
}

export default ProductCard