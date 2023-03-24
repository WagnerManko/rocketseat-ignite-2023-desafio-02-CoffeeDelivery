import styles from './styles.module.scss'
import coffees from '../../api/coffees/coffees.json'
import { CoffeeCard } from '../CoffeeCard'

export function CoffeeList(){
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