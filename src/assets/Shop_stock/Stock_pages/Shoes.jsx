import React from 'react'
import items from '../../Items.json'
import Single_product from './Innercompt/Single_product'

const Shoes = () => {
  const shoeItems = items.filter(product => product.category === 'Shoes')

  return (
    <div className='p-5 max-[500px]:p-1 grid place-items-baseline grid-cols-5 gap-y-8 max-[900px]:grid max-[500px]:grid-cols-2 max-[900px]:grid-cols-3 max-[200px]:grid-cols-1 min-2xl:grid-cols-7'>

    {/* <div className='p-5 max-[500px]:p-1 grid place-items-center grid-cols-4 gap-y-8 max-[900px]:grid max-[500px]:grid-cols-2 max-[900px]:grid-cols-3 max-[200px]:grid-cols-1 min-2xl:grid-cols-5'> */}
      {shoeItems.length ? (
        shoeItems.map(product => (
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
        ))
      ) : (
        <p className='text-neutral-400'>No shoes available yet.</p>
      )}
    </div>
  )
}

export default Shoes
