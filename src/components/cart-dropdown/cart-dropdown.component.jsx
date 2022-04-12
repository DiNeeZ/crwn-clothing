import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import CartItem from '../cart-item/cart-item.component'
import Button from '../button/button.component'

import { CartContext } from '../../contexts/cart.context'

import {
  CartDropdownContainer,
  EmptyMessage,
  CartProducts
} from './cart-dropdown.styles.jsx'

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext)
  const navigate = useNavigate()

  const handleClick = () => {
    setIsCartOpen(!isCartOpen)
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