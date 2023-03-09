import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
} from 'react'

import { CoffeeProps } from '../api/helpers/interfaces'

import { cartReducer } from '../hooks/reducer'
import { useStorage } from '../hooks/useStorage'

interface CartContextType {
    cartItems: [] | CoffeeProps[]
    addToCart: (currentCoffee: CoffeeProps) => void
    loadStorageCart: (storageCoffee: CoffeeProps[]) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({children}: CartContextProviderProps) {
    const [cartItems, dispatch] = useReducer(cartReducer, [])

    function loadStorageCart(storageCoffee: CoffeeProps[]){
      dispatch({
        type: 'LOAD_CART_ITEM',
        payload: {
          data: storageCoffee
        }
      })
    }

    function addToCart(currentCoffee: CoffeeProps){
      dispatch({
        type: 'ADD_CART_ITEM',
        payload: {
          data: currentCoffee
        }
      })
    }

    useEffect(() => {
      useStorage(cartItems)
    }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        loadStorageCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
