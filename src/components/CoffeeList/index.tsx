import styles from './styles.module.scss'
import coffees from '../../api/coffees/coffees.json'
import { useContext, useEffect } from 'react'
import { CoffeeCard } from '../CoffeeCard'
import { CartContext } from '../../contexts/CartContext'

export function CoffeeList(){
    const { loadStorageCart } = useContext(CartContext)

    useEffect(() => {
        const storageCartItems = localStorage.getItem(
            '@coffee-delivery:cartItems',
        )

        if (storageCartItems) {
            loadStorageCart(JSON.parse(storageCartItems))
        }
      },[])

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