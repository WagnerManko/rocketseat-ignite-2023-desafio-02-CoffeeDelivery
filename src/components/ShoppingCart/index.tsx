import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../contexts/CartContext"

import styles from './styles.module.scss'
import { Minus, Plus, Trash } from "phosphor-react"
import { NavLink } from "react-router-dom"

export function ShoppingCart(){
    const { cartItems, addToCart, removeToCart, deleteToCart, cleanCart } = useContext(CartContext)
    const [ cartTotal, setCartTotal ] = useState(0)
    const [ deliveryCost, setDeliveryCost ] = useState(0)

    function calcCartTotal(){
        let total = 0;

        for(let i = 0; i < cartItems.length; i++){
            total = total + cartItems[i].cost * cartItems[i].quantity!
        }

        total !== 0 && setDeliveryCost(3.5)
        setCartTotal(total)
    }

    useEffect(() => {
        calcCartTotal()
    }, [cartItems])

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
                                    <button onClick={
                                        () => removeToCart(item)
                                    }>
                                        <Minus size={14} />
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={
                                        () => addToCart({...item, quantity: 1})
                                    }>
                                        <Plus size={14} />
                                    </button>
                                </div>
                                
                                <button onClick={() => deleteToCart(item)}>
                                    <Trash size={16} /> <p>Remover</p>
                                </button>
                            </div>
                        </div>
                    </div>

                    <p>R$ {Number(item.cost * item.quantity!).toFixed(2)}</p>
                </div>
            ))}

            <div className={styles.amount}>
                <p>Total de itens <span>R$ {Number(cartTotal).toFixed(2)}</span></p>
                <p>Entrega <span>R$ {Number(deliveryCost).toFixed(2)}</span></p>
                <p>Total <span>R$ {Number(cartTotal + deliveryCost).toFixed(2)}</span></p>
                <NavLink to="/success" title="Success">
                    <button onClick={() => cleanCart()}>
                        <span>Confirmar Pedido</span>
                    </button>
                </NavLink>
            </div>
        </>
    )
}