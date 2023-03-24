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
    removeToCart: (currentCoffee: CoffeeProps) => void
    deleteToCart: (currentCoffee: CoffeeProps) => void
}
interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({children}: CartContextProviderProps) {
    const [cartItems, dispatch] = useReducer(cartReducer, useStorage('get'))

    // function addToCart(currentCoffee: CoffeeProps | CoffeeProps[]){
    function addToCart(currentCoffee: CoffeeProps){
      dispatch({
        type: 'ADD_CART_ITEM',
        payload: {
          data: currentCoffee
        }
      })
    }

    function removeToCart(currentCoffee: CoffeeProps){
      const itemQuantity = cartItems.find(item => item.id === currentCoffee.id)?.quantity

      if(itemQuantity! > 1){
        dispatch({
          type: 'REMOVE_CART_ITEM',
          payload: {
            data: currentCoffee
          }
        })
      }

      return
    }

    function deleteToCart(currentCoffee: CoffeeProps){
      const itemsRemains = cartItems.filter(item => item.id !== currentCoffee.id)

      dispatch({
        type: 'DELETE_CART_ITEM',
        payload: {
          data: itemsRemains
        }
      })
    }

    useEffect(() => {
        useStorage('post', cartItems)
    }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeToCart,
        deleteToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
