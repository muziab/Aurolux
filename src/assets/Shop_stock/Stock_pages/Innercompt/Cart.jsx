import React, { useContext } from 'react'
import { FaShoppingCart, FaTrashAlt, FaPlus, FaMinus, FaTimes } from 'react-icons/fa'
import { CartContext } from '../../../CartContext'

const Cart = ({ isVisible, onClose }) => {
  const { cartItems, removeFromCart, updateCartQuantity } = useContext(CartContext)

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)

  const handleQuantity = (id, delta) => updateCartQuantity(id, delta)

  const handleRemove = id => removeFromCart(id)

  const overlayClasses = isVisible ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
  const panelClasses = isVisible ? 'translate-x-0' : 'translate-x-full'

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${overlayClasses}`}
        onClick={onClose}
        aria-hidden={!isVisible}
      />
      <section className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-[420px] flex-col border-l border-neutral-800 bg-[#0e0e0e] p-3 shadow-[0_0_50px_rgba(0,0,0,0.75)] transition-transform duration-300 ease-out sm:p-4 ${panelClasses}`}>
        <div className='mb-4 flex items-center justify-between border-b border-neutral-800 pb-4'>
          <div>
            <h2 className='text-2xl font-semibold text-white'>Cart</h2>
            <p className='text-xs text-neutral-500'>Drag to review or click outside to close.</p>
          </div>
          <button
            type='button'
            onClick={onClose}
            className='rounded-full bg-white/5 p-2 text-neutral-200 transition hover:bg-white/10'
            aria-label='Close cart'
          >
            <FaTimes className='h-4 w-4 closed' />
          </button>
        </div>

        <div className='flex items-center justify-between rounded-3xl bg-[#121212] p-3 text-sm text-neutral-200'>
          <div className='flex items-center gap-2'>
            <FaShoppingCart className='text-base text-[#d4af37]' />
            <span>{cartItems.length} item{cartItems.length !== 1 ? 's' : ''}</span>
          </div>
          <span className='rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.12em]'>Overview</span>
        </div>

        <div className='mt-4 space-y-3 overflow-y-auto pr-1'>
          {cartItems.length === 0 ? (
            <div className='rounded-3xl border border-dashed border-neutral-700 bg-[#0f0f0f] p-6 text-center text-neutral-400'>
              <p className='text-sm font-medium text-white'>Your cart is empty</p>
              <p className='mt-2 text-xs'>Add a product to see it here.</p>
            </div>
          ) : (
            cartItems.map(item => {
              const title = item.title.length > 30 ? `${item.title.slice(0, 30)}...` : item.title
              return (
                <div key={item.id} className='grid grid-cols-[64px_minmax(0,1fr)] gap-3 rounded-3xl border border-neutral-800 bg-[#101010] p-3 sm:grid-cols-[72px_minmax(0,1fr)]'>
                  <img src={item.img} alt={item.title} className='h-16 w-16 rounded-2xl object-cover sm:h-20 sm:w-20' />
                  <div className='flex flex-col justify-between gap-3'>
                    <div>
                      <h3 className='text-sm font-semibold text-white'>{title}</h3>
                      <p className='mt-1 text-xs text-neutral-400'>{item.description}</p>
                    </div>
                    <div className='flex flex-wrap items-center justify-between gap-2'>
                      <div className='flex items-center gap-2 rounded-full border border-neutral-700 bg-[#121212] px-2 py-1 text-xs text-neutral-200'>
                        <button
                          type='button'
                          onClick={() => handleQuantity(item.id, -1)}
                          className='rounded-full bg-white/5 px-2 py-1 transition hover:bg-white/10'
                        >
                          <FaMinus className='h-3 w-3' />
                        </button>
                        <span className='min-w-[1.5rem] text-center font-semibold'>{item.qty}</span>
                        <button
                          type='button'
                          onClick={() => handleQuantity(item.id, 1)}
                          className='rounded-full bg-white/5 px-2 py-1 transition hover:bg-white/10'
                        >
                          <FaPlus className='h-3 w-3' />
                        </button>
                      <p className='text-sm font-semibold text-[#F8F8F8]'>{item.priceLabel || `₦${item.price.toLocaleString()}`}</p>
                      </div>
                      <button
                        type='button'
                        onClick={() => handleRemove(item.id)}
                        className='rounded-full bg-red-500 px-3 py-1 text-[11px] font-semibold text-white transition hover:bg-red-600'
                      >
                        <FaTimes/>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>

      <div className='mt-4 rounded-[24px] border border-neutral-800 bg-[#101010] p-4'>
        <div className='flex items-center justify-between text-sm text-neutral-400'>
          <span>Subtotal</span>
          <span className='font-semibold text-white'>₦{subtotal.toLocaleString()}</span>
        </div>
        <button className='mt-4 w-full rounded-full bg-[#B8860B] px-4 py-3 text-sm font-semibold uppercase text-black transition hover:bg-[#d4af37]'>
          Checkout
        </button>
      </div>
    </section>
    </>
  )
}

export default Cart
