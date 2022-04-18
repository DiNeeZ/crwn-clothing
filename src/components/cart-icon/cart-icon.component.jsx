import { useDispatch, useSelector } from 'react-redux'

import { setIsCartOpen } from '../../store/cart/cart.action'
import { selectCartCount } from '../../store/cart/cart.selector'

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles.jsx'

const CartIcon = () => {
  const dispatch = useDispatch()
  const cartCount = useSelector(selectCartCount)

  const tootleIsCartOpen = () => {
    dispatch(setIsCartOpen())
  }

  return (
    <CartIconContainer onClick={tootleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon