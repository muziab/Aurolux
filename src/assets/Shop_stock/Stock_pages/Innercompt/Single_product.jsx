import React, { useContext } from 'react'
import { FaCartPlus, FaStar } from 'react-icons/fa'
import { CartContext } from '../../../CartContext'

const placeholderImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="100%25" height="100%25" fill="%23000000"/%3E%3Ctext x="50%25" y="45%25" fill="%23d4af37" font-family="Arial,sans-serif" font-size="26" text-anchor="middle" dominant-baseline="middle"%3ENo Image%3C/text%3E%3Ctext x="50%25" y="65%25" fill="%23ffffff" font-family="Arial,sans-serif" font-size="16" text-anchor="middle" dominant-baseline="middle"%3EAvailable%3C/text%3E%3C/svg%3E'

const Single_product = ({ img, price, discount, title, category, org_price, description }) => {
  const { addToCart } = useContext(CartContext)
  const numericPrice = Number(String(price).replace(/[^0-9]/g, '')) || 0
  const displayImage = img || placeholderImage

  return (
    <div className='h-fit w-full overflow-hidden rounded-xl border border-[#3c2f12] bg-[#101010] text-sm shadow-neutral-900 transition duration-400 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)]'>
      <div className='relative h-48 overflow-hidden sm:h-54'>
        <p className='text-[#B8860B] bg-[#352f21] absolute left-0 text-sm px-2 top-0 z-10 text-right place-self-end italic'>{discount}</p>
        <span className='absolute right-0 top-0 px-2 bg-neutral-300/75 py-1 text-[10px] uppercase tracking-[0.16em] text-neutral-900'>{category || 'New'}</span>
        <div className='absolute z-10 inset-y-50 inset-x-34 bg-neutral-200/25  text-black bg-linear-30 rounded-l-2xl text-[14px] px-2 h-fit w-fit '>مصعب</div>
        {/* bg-[#352f21] */}
        <img
          src={displayImage}
          title={title}
          onError={(event) => {
            if (event.currentTarget.src !== placeholderImage) {
              event.currentTarget.src = placeholderImage
            }
          }}
          className='h-full w-full  object-cover transition-all duration-300 '
          alt={title}
        />
      </div>
      <div className='p-3'>
        <div className='flex items-center justify-between gap-2 mb-2'>
          {/* <div className='inline-flex items-center gap-2 text-[#f4d079]'>
            <FaStar />
            <span className='text-[11px] uppercase tracking-[0.25em]'>Premium</span>
          </div> */}
          {/* {discount && (
            <div className='rounded-full bg-[#B8860B] px-2 py-1 text-[10px] font-semibold uppercase text-black'>
              {discount.replace('-', '')}
            </div>
          )} */}
        </div>
        <div className='flex flex-col gap-0.5 leading-tight'>
          <p className='text-[11px] uppercase tracking-[0.22em] text-neutral-400'>{category}</p>
          <h2 className='mt-1 line-clamp-2 text-base font-semibold text-white'>{title}</h2>
          {description && <p className='line-clamp-2 text-xs text-neutral-400'>{description}</p>}
        </div>
        <div className='mt-3 flex items-end justify-between gap-2 rounded-2xl'>
          <div className='flex flex-col items-start gap-0'>
            {org_price && (
              <strike className='text-[12px] italic text-neutral-500'>₦{org_price}</strike>
            )}
            <p className='text-lg font-bold text-[#f4d079] sm:text-xl'>₦{price}</p>
          </div>
          <button
            type='button'
            onClick={() =>
              addToCart({
                title,
                price: numericPrice,
                priceLabel: price,
                img,
                discount,
                description: description || (discount ? `${discount} deal` : 'Classic pick'),
              })
            }
            className='inline-flex items-center justify-center gap-2 rounded-full bg-[#B8860B] px-3 py-2 text-sm font-semibold text-black transition hover:bg-[#d4af37] sm:px-4'
            name='Add To Cart'
          >
            <FaCartPlus className='h-4 w-4 sm:h-5 sm:w-5' />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Single_product
