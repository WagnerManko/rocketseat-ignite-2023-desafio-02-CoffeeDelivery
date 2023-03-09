import styles from './styles.module.scss'
import coffees from '../../api/coffees/coffees.json'
import { useContext, useEffect } from 'react'
import { CoffeeCard } from '../CoffeeCard'
import { CartContext } from '../../contexts/CartContext'
import { useStorage } from '../../hooks/useStorage'

export function CoffeeList(){
    const { cartItems } = useContext(CartContext)

    useEffect(() => {
        useStorage('post', cartItems)
    }, [cartItems])

    return (
        <div className={styles.coffees}>
            <h1>Nossos cafés</h1>

            <div className={styles.menu}>
                {coffees.list.map(coffee => (
                    <CoffeeCard
                        id={coffee.id}
                        key={coffee.id}
                        name={coffee.name}
                        description={coffee.description}
                        cost={coffee.cost}
                        tags={coffee.tags}
                    />
                ))}
            </div>
        </div>
    )
}