import { useContext, useEffect, useReducer, useState } from "react"
import { CartContext } from "../../contexts/CartContext"

import styles from './styles.module.scss'
import { Minus, Plus, Trash } from "phosphor-react"
import { CoffeeProps } from "../../api/helpers/interfaces"
import produce from "immer"

export function ShoppingCart(){
    const { cartItems, addToCart, removeToCart, deleteToCart, cartTotal } = useContext(CartContext)

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
                <p>Entrega <span>R$ {Number(3.5).toFixed(2)}</span></p>
                <p>Total <span>R$ {Number(0).toFixed(2)}</span></p>
                <button><span>Confirmar Pedido</span></button>
            </div>
        </>
    )
}