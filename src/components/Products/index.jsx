import React, { useContext } from 'react'
import ProductCard from '../ProductCard'
import { MoneyContext } from '../../context/MoneyContext';

function Products() {
  const {products} = useContext(MoneyContext);

  if(!products) return <div className='w-full h-[100dvh] flex items-center justify-center'>Loading..</div>
  return (
    <section className='flex flex-wrap justify-center'>
      {products.products.map((card,index) => {
          return <ProductCard key={index} card={card} />
        })
      }
    </section>
  )
}

export default Products