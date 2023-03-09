import { CoffeeProps } from "../api/helpers/interfaces"

export function useStorage(items: CoffeeProps[]){
    const stateJSON = JSON.stringify(items)
    localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON)
}