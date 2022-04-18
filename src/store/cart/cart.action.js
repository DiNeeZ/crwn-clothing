import { createAction } from '../../utils/reducer/reducer.utils'
import { CART_ACTION_TYPES } from './cart.types'

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)

  if (existingCartItem) {
    return cartItems.map(cartItem => cartItem.id === productToAdd.id ?
      { ...cartItem, quantity: cartItem.quantity + 1 } :
      cartItem
    )
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeItemFromCart = (cartItems, productToRemove) => {
  const removedCartItem = cartItems.find(cartItem => cartItem.id === productToRemove.id)

  return cartItems.filter(item => item.id !== removedCartItem.id)
}


const decreaseItemFromCart = (cartItems, product) => {
  const productItem = cartItems.find(item => item.id === product.id)

  if (productItem.quantity === 1) {
    return removeItemFromCart(cartItems, product)
  } else {
    return cartItems.map(item => item.id === product.id ?
      { ...item, quantity: item.quantity - 1 } :
      item
    )
  }
}

export const setIsCartOpen = () =>
  createAction(CART_ACTION_TYPES.SET_CART_IS_OPEN)

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
  }

export const removeItem = (cartItems, productToRemove) => {
    const newCartItems = removeItemFromCart(cartItems, productToRemove)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
  }

export const decreaseItem = (cartItems, itemToDecrease) => {
    const newCartItems = decreaseItemFromCart(cartItems, itemToDecrease)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
  }
