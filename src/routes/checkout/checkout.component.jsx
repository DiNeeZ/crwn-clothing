import { addItemToCart, removeItem, decreaseItem } from '../../store/cart/cart.action'

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
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'

const CheckoutItem = ({ cartProduct }) => {
  const { id, imageUrl, name, price, quantity } = cartProduct
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  const increaseProductQuantity = () => {
    dispatch(addItemToCart(cartItems, cartProduct))
  }

  const deleteProduct = () => {
    dispatch(removeItem(cartItems, cartProduct))
  }

  const decreaseProduct = () => {
    dispatch(decreaseItem(cartItems, cartProduct))
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
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

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