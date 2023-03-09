import { useState, useContext } from 'react';
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import styles from './styles.module.scss'
import { CartContext } from '../../contexts/CartContext';
import { CoffeeProps } from '../../api/helpers/interfaces';

export function CoffeeCard({id, name, description, cost, tags}: CoffeeProps){
    const [coffeeTotal, setCoffeeTotal] = useState(1);
    const { addToCart } = useContext(CartContext)

    const currentCoffee = {
        id,
        name,
        description,
        cost,
        tags,
        quantity: coffeeTotal,
    }

    function addUnityCoffee() {
        setCoffeeTotal(coffeeTotal + 1);
    }

    function removeUnityCoffee() {
        if(coffeeTotal > 1) {
            setCoffeeTotal(coffeeTotal - 1);
        }

        return;
    }

    return (
        <div className={styles.coffeeCard}>
            <div className={styles.header}>
                <img src={`./coffees/coffee-${id}.png`} alt="" />
                <div className={styles.tags}>
                    {tags.map(tag => (
                        <span key={id + tag}><p>{tag}</p></span>
                    ))}
                </div>
            </div>

            <div className={styles.content}>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>

            <div className={styles.footer}>
                <p><span>R$</span> {Number(cost).toFixed(2)}</p>
                <div className={styles.buy}>
                    <div>
                        <button onClick={removeUnityCoffee}>
                            <Minus size={14} />
                        </button>
                        <span>{coffeeTotal}</span>
                        <button onClick={addUnityCoffee}>
                            <Plus size={14} />
                        </button>
                    </div>
                    <button onClick={() => [
                        addToCart(currentCoffee),
                        setCoffeeTotal(1),
                    ]}>
                        <ShoppingCart size={22} weight="fill" />
                    </button>
                </div>
            </div>
        </div>
    )
}