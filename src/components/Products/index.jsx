import React from 'react'
import ProductCard from '../ProductCard'
import dataset from '../../dataset.json';

function Products() {
  let cards = dataset.products;
  return (
    <section className='flex bg-gray-100 mt-4'>
      {cards.map(card => {
          return <ProductCard card={card} />
        })
      }
    </section>
  )
}

export default Products