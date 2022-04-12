import { useContext, useEffect, useState } from 'react'

import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'
import { CartContext } from '../../contexts/cart.context'

import {
  ProductCardContainer,
  ProductCountContainer,
  ProductCount,
  CardFooter
} from './product-card.styles.jsx'

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
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <CardFooter>
        <span>{name}</span>
        <span>{price}</span>
      </CardFooter>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}>
        Add to cart
      </Button>
      {isQuantityVisible && (
        <ProductCountContainer>
          <ProductCount>
            X <span>{productQuantity}</span>
          </ProductCount>
        </ProductCountContainer>
      )}
    </ProductCardContainer>
  )
}

export default ProductCard