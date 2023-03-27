import { produce } from 'immer'
import { CoffeeProps } from "../api/helpers/interfaces";
import { useStorage } from './useStorage';

export function cartReducer(state: CoffeeProps[], action: any){
    const coffeeData = action.payload.data;

    const itemIndex = state.findIndex(
        item => item.id === coffeeData.id
    )

    if(action.type === 'ADD_CART_ITEM') {
        if(itemIndex >= 0) {
            return produce(state, (draft) => {
                const coffee = draft[itemIndex]
                coffee.quantity = coffee.quantity + coffeeData.quantity
            })
        }

        return [...state, action.payload.data]

    } else if(action.type === 'REMOVE_CART_ITEM') {
        return produce(state, (draft) => {
            const coffee = draft[itemIndex]
            coffee.quantity = coffee.quantity! - 1
        })

    } else if(action.type === 'DELETE_CART_ITEM') {
        useStorage('delete')

        return produce(state, () => coffeeData)

    } else if (action.type === 'CLEAN_CART') {
        useStorage('delete')

        return []
    } else {
        return state
    }
}
