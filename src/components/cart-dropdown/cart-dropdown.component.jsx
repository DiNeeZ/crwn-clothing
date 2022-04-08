import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

import { CartContext } from '../../contexts/cart.context'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
  const { cartItems,isCartOpen, setIsCartOpen } = useContext(CartContext)
  const navigate = useNavigate()
  
  const handleClick = () => {
    setIsCartOpen(!isCartOpen)
    navigate('/checkout')
  }
  
  return (
    <div className='cart-dropdown-container'>
      <ul className='cart-items'>
        {
          cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)
        }
      </ul>
      <Button onClick={handleClick}>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown