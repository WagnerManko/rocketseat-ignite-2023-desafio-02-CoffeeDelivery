import {
  createContext,
  ReactNode,
  useReducer,
} from 'react'

import { CoffeeProps } from '../api/helpers/interfaces'

import { cartReducer } from '../hooks/reducer'
import { useStorage } from '../hooks/useStorage'

interface CartContextType {
    cartItems: [] | CoffeeProps[]
    addToCart: (currentCoffee: CoffeeProps) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({children}: CartContextProviderProps) {
    const [cartItems, dispatch] = useReducer(cartReducer, useStorage('get'))

    function addToCart(currentCoffee: CoffeeProps){
      dispatch({
        type: 'ADD_CART_ITEM',
        payload: {
          data: currentCoffee
        }
      })
    }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
