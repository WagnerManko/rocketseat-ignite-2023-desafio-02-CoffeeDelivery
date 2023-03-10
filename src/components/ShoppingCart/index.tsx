import { useContext, useReducer } from "react"
import { CartContext } from "../../contexts/CartContext"

import styles from './styles.module.scss'
import { Minus, Plus, Trash } from "phosphor-react"

export function ShoppingCart(){
    const { cartItems } = useContext(CartContext)

    console.log(cartItems)

    return (
        <>
            {cartItems.map(item => (
                <div key={item.id} className={styles.cartItem}>
                    <div  className={styles.coffee}>
                        <img src={`./coffees/coffee-${item.id}.png`} alt="" />

                        <div className={styles.coffeeQuantity}>
                            <h1>{item.name}</h1>
                            <div>
                                <div className={styles.addAndRemoveBtn}>
                                    <button>
                                        <Minus size={14} />
                                    </button>
                                    <span>1</span>
                                    <button>
                                        <Plus size={14} />
                                    </button>
                                </div>
                                
                                <button><Trash size={16} /> <p>Remover</p></button>
                            </div>
                        </div>
                    </div>

                    <p>R$ {Number(item.cost * item.quantity!).toFixed(2)}</p>
                </div>
            ))}

            <div className={styles.amount}>
                <p>Total de itens <span>R$ 29,70</span></p>
                <p>Entrega <span>R$ 3,50</span></p>
                <p>Total <span>R$ 33,20</span></p>
                <button><span>Confirmar Pedido</span></button>
            </div>
        </>
    )
}