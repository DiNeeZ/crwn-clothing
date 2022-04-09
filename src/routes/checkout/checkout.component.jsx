import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg'
import { ReactComponent as CloseButton } from '../../assets/close-button.svg'

import './checkout.styles.scss'

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
      <td className='image-container'>
        <img src={imageUrl} alt={name} />
      </td>
      <td>{name}</td>
      <td>
        <div className='quantity'>
          <button
            className='btn-arrow'
            onClick={decreaseProduct}>
            <ArrowLeft />
          </button>
          <span>{quantity}</span>
          <button
            className='btn-arrow'
            onClick={increaseProductQuantity}
          >
            <ArrowRight />
          </button>
        </div>
      </td>
      <td>{price}</td>
      <td>
        <button
          className='btn-close'
          onClick={deleteProduct}>
          <CloseButton />
        </button>
      </td>
    </tr>
  )
}

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext)

  return (
    <div className='checkout-container'>
      <table className='checkout-table'>
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody className='checkout-table-body'>
          {
            cartItems.map(cartItem => (
              <CheckoutItem
                key={cartItem.id}
                cartProduct={cartItem}
              />
            ))
          }
        </tbody>
      </table>
      <div className='total'>Total: {cartTotal}$</div>
    </div>
  )
}

export default Checkout