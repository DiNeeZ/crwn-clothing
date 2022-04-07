import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'
import { ReactComponent as ShoppingCart } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext)

  const tootleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <div 
    className='cart-icon-container'
    onClick={tootleIsCartOpen}>
      <ShoppingCart className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon