import { CoffeeProps } from "../api/helpers/interfaces"

export function useStorage(methods: 'get' | 'post' | 'delete', items?: CoffeeProps[] | CoffeeProps){
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
        if (items) {
            const stateJSON = JSON.stringify(items)

            if(stateJSON.length > 2){
                localStorage.setItem('@coffee-delivery:cartItems', stateJSON)
            }
        }
        
        return
    }

    if(methods === 'delete') {
        localStorage.removeItem('@coffee-delivery:cartItems')

        return
    }
}