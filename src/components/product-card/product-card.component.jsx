import { useContext, useEffect, useState } from 'react'

import Button from '../button/button.component'
import { CartContext } from '../../contexts/cart.context'
import './product-card.styles.scss'

const ProductCard = ({ product }) => {
  const { name, imageUrl, price, id } = product

  const [productQuantity, setProductQuantity] = useState(0)
  const [showElement, setShowElement] = useState(false)
  const { addItemToCart, cartItems } = useContext(CartContext)

  useEffect(() => {
    const sameProductInCart = cartItems.find(cartItem => cartItem.id === id)

    if (sameProductInCart) {
      setProductQuantity(sameProductInCart.quantity)
    }
  }, [cartItems, id])

  const isQuantityVisible = productQuantity > 0 && showElement

  const addProductToCart = () => {
    addItemToCart(product)
    setShowElement(true)
    setTimeout(() => {
      setShowElement(false)
    }, 400)
  }

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button
        buttonType='inverted'
        onClick={addProductToCart}>
        Add to cart
      </Button>
      {isQuantityVisible && (
        <div className='product-count-container'>
          <div className='product-count'>
            X <span>{productQuantity}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductCard