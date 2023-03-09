import { produce } from 'immer'
import { CoffeeProps } from "../api/helpers/interfaces";

export function cartReducer(state: CoffeeProps[], action: any){
    if(action.type === 'ADD_CART_ITEM') {
        const coffeeData = action.payload.data;

        const itemIndex = state.findIndex(
            item => item.id === coffeeData.id
        )

        if(itemIndex >= 0) {

            return produce(state, (draft) => {
                const coffee = draft[itemIndex]
                coffee.quantity = coffee.quantity + coffeeData.quantity
            })
        }

        return [...state, action.payload.data]

    } else if(action.type === 'REMOVE_CART_ITEM') {
        console.log('REMOVE')
        return state

    } else if(action.type === 'LOAD_CART_ITEM') {
        return action.payload.data

    } else {
        return state
    }
}