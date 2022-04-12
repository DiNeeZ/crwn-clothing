import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg'
import { ReactComponent as CloseButton } from '../../assets/close-button.svg'

import {
  CheckoutContainer,
  CheckoutTable,
  Total,
  ImageContainer,
  Quantity
} from './checkout.styles'

const CheckoutItem = ({ cartProduct }) => {
  const { addItemToCart, removeItem, decreaseItem } = useContext(CartContext)
  const { id, imageUrl, name, price, quantity } = cartProduct

  const increaseProductQuantity = () => {
    addItemToCart(cartProduct)
  }

  const deleteProduct = () => {
    removeItem(cartProduct)
  }

  const decreaseProduct = () => {
    decreaseItem(cartProduct)
  }

  return (
    <tr key={id}>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <td>{name}</td>
      <td>
        <Quantity>
          <button onClick={decreaseProduct}>
            <ArrowLeft />
          </button>
          <span>{quantity}</span>
          <button onClick={increaseProductQuantity}>
            <ArrowRight />
          </button>
        </Quantity>
      </td>
      <td>{price}</td>
      <td>
        <button onClick={deleteProduct}>
          <CloseButton />
        </button>
      </td>
    </tr>
  )
}

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext)

  return (
    <CheckoutContainer>
      <CheckoutTable>
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {
            cartItems.map(cartItem => (
              <CheckoutItem
                key={cartItem.id}
                cartProduct={cartItem}
              />
            ))
          }
        </tbody>
      </CheckoutTable>
      <Total>Total: {cartTotal}$</Total>
    </CheckoutContainer>
  )
}

export default Checkout