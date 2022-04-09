import { createContext, useEffect, useState } from 'react'

const removeItemFromCart = (cartItems, productToRemove) => {
  const removedCartItem = cartItems.find(cartItem => cartItem.id === productToRemove.id)

  return cartItems.filter(item => item.id !== removedCartItem.id)
}

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addItemToCart: () => { },
  cartCount: 0,
  removeItemFromCart: () => {},
  decreaseItemFromCart: () => {},
  cartTotal: 0
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0)
    setCartCount(newCartCount)
  }, [cartItems])

  useEffect(() => {
    const total = cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    setCartTotal(total)
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const removeItem = (productToRemove) => {
    setCartItems(removeItemFromCart(cartItems, productToRemove))
  }

  const decreaseItem = (itemToDecrease) => {
    setCartItems(decreaseItemFromCart(cartItems, itemToDecrease))
  }

  const value = {
    isCartOpen, setIsCartOpen, addItemToCart, cartItems,
    cartCount, removeItem, decreaseItem, cartTotal
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>)
}