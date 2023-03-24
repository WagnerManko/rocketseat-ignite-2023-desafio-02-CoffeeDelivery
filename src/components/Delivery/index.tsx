import { MapPinLine } from 'phosphor-react'
import styles from './styles.module.scss'
import { useState } from "react";

export function Delivery(){
    const [complementoFilled, setComplementoFilled] = useState(false)

    return (
        <>
            <div className={styles.formTitle}>
                <MapPinLine size={24} />
                <div>
                    <h1>Endereço de Entrega</h1>
                    <h2>Informe o endereço onde deseja receber seu pedido</h2>
                </div>
            </div>

            <div className={styles.divForm}>
                <form onSubmit={() => {}}>
                    <input type="text" className={styles.cep} placeholder="CEP" />
                    
                    <input type="text" placeholder="Rua" />

                    <div>
                        <input type="text" className={styles.number} placeholder="Número" />
                        
                        <div>
                            <input type="text" placeholder="Complemento" onChange={(e) => {
                                e.target.value.length != 0 ?
                                setComplementoFilled(true) :
                                setComplementoFilled(false)
                            }}/>
                            {!complementoFilled && <span>Opcional</span>}
                        </div>
                        
                        <input type="text" className={styles.neighborhood} placeholder="Bairro" />

                        <input type="text" className={styles.city} placeholder="Cidade" />

                        <input type="text" className={styles.uf} placeholder="UF" />
                    </div>
                </form>
            </div>
        </>
    )
}