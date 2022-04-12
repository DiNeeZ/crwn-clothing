import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles.jsx'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

  const tootleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <CartIconContainer onClick={tootleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon