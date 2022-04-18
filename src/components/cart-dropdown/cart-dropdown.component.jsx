import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import CartItem from '../cart-item/cart-item.component'
import Button from '../button/button.component'

import { selectCartItems } from '../../store/cart/cart.selector'

import {
  CartDropdownContainer,
  EmptyMessage,
  CartProducts
} from './cart-dropdown.styles.jsx'
import { setIsCartOpen } from '../../store/cart/cart.action'

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)
  const navigate = useNavigate()

  const handleClick = () => {
    setIsCartOpen()
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
      <CartProducts>
        {
          cartItems.length ?
          cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />) :
          (
            <EmptyMessage>
              Your cart is empty
            </EmptyMessage>
          )
        }
      </CartProducts>
      <Button onClick={handleClick}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown