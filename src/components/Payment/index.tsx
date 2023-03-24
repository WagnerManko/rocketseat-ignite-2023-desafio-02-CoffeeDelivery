import { useState } from "react"
import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react"
import styles from './styles.module.scss'

export function Payment(){
    const [ choseMethod, setChoseMethod ] = useState('')

    return (
        <>
            <div className={styles.paymentTitle}>
                <CurrencyDollar size={24} />
                <div>
                    <h1>Pagamento</h1>
                    <h2>O pagamento é feito na entrega. Escolha a forma que deseja pagar</h2>
                </div>
            </div>

            <div className={styles.paymentMethods}>
                <button
                    onClick={() => setChoseMethod('credit')}
                    className={choseMethod === 'credit' ? styles.active : ''}
                >
                    <CreditCard size={16} />
                    <p>Cartão de crédito</p>
                </button>
                
                <button
                    onClick={() => setChoseMethod('debit')}
                    className={choseMethod === 'debit' ? styles.active : ''}
                >
                    <Bank size={16} />
                    <p>cartão de débito</p>
                </button>
                
                <button
                    onClick={() => setChoseMethod('money')}
                    className={choseMethod === 'money' ? styles.active : ''}
                >
                    <Money size={16} />
                    <p>dinheiro</p>
                </button>
            </div>
        </>
    )
}