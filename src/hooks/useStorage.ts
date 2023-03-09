import { CoffeeProps } from "../api/helpers/interfaces"

export function useStorage(methods: 'get' | 'post', items?: CoffeeProps[]){
    if(methods === 'get') {
        const parsedItems = localStorage.getItem(
            '@coffee-delivery:cartItems',
        )

        if (parsedItems) {
            return JSON.parse(parsedItems)
        } 

        return []
    }

    if(methods === 'post') {
        const stateJSON = JSON.stringify(items)
        localStorage.setItem('@coffee-delivery:cartItems', stateJSON)
    }
}