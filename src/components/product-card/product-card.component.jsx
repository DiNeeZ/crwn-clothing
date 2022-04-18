import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'

import {
  ProductCardContainer,
  ProductCountContainer,
  ProductCount,
  CardFooter
} from './product-card.styles.jsx'
import { selectCartItems } from '../../store/cart/cart.selector'
import { addItemToCart } from '../../store/cart/cart.action'

const ProductCard = ({ product }) => {
  const { name, imageUrl, price, id } = product

  const dispatch = useDispatch()
  const [productQuantity, setProductQuantity] = useState(0)
  const [showElement, setShowElement] = useState(false)
  const cartItems = useSelector(selectCartItems)

  useEffect(() => {
    const sameProductInCart = cartItems.find(cartItem => cartItem.id === id)

    if (sameProductInCart) {
      setProductQuantity(sameProductInCart.quantity)
    }
  }, [cartItems, id])

  const isQuantityVisible = productQuantity > 0 && showElement

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product))
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