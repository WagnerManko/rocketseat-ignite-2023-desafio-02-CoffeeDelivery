export interface CoffeeProps {
    id: number,
    name: string,
    description: string,
    cost: number,
    tags: string[]
    quantity?: number,
}