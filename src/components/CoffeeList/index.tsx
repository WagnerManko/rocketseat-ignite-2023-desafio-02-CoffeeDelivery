import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import styles from './styles.module.scss'
import coffees from '../../api/coffees/coffees.json'

export function CoffeeList(){
    return (
        <div className={styles.coffees}>
            <h1>Nossos cafés</h1>

            <div className={styles.menu}>
                {coffees.list.map(coffee => (
                    <div key={coffee.id} className={styles.coffeeCard}>
                        <div className={styles.header}>
                            <img src={`./coffees/coffee-${coffee.id}.png`} alt="" />
                            <div className={styles.tags}>
                                {coffee.tags.map(tag => (
                                    <span><p>{tag}</p></span>
                                ))}
                            </div>
                        </div>

                        <div className={styles.content}>
                            <h1>{coffee.name}</h1>
                            <p>{coffee.description}</p>
                        </div>

                        <div className={styles.footer}>
                            <p><span>R$</span> {Number(coffee.cost).toFixed(2)}</p>
                            <div className={styles.buy}>
                                <div>
                                    <button>
                                        <Minus size={14} />
                                    </button>
                                    <span>1</span>
                                    <button>
                                        <Plus size={14} />
                                    </button>
                                </div>
                                <span>
                                    <ShoppingCart size={22} weight="fill" />
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}