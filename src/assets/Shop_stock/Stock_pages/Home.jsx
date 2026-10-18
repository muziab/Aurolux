import React from 'react'
import items from '../../Items.json'
import Single_product from './Innercompt/Single_product'

const Home = () => {
  return (
    <div className='grid gap-4 p-3 sm:p-5 lg:p-6 xl:p-8 [grid-template-columns:repeat(auto-fit,minmax(180px,1fr))] max-[320px]:[grid-template-columns:repeat(1,minmax(0,1fr))]'>
      {items.map(product => (
        <Single_product
          key={product.id}
          img={new URL(product.img, import.meta.url).href}
          price={product.price}
          discount={product.discount}
          org_price={product.org_price}
          title={product.title}
          category={product.category}
          description={product.description}
        />
      ))}
    </div>
  )
}

export default Home
