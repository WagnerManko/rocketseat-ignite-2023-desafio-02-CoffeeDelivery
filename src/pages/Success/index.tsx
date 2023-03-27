
import { MapPin, CurrencyDollar, Timer } from 'phosphor-react'
import { Layout } from '../../layout'
import successImg from '../../assets/success.png'
import styles from './styles.module.scss'

export function Success(){
    return (
        <Layout>
            <div className={styles.success}>
                    <h1>Uhu! Pedido confirmado</h1>
                    <h2>Agora é só aguardar que logo o café chegará até você</h2>

                <div className={styles.message}>
                    <div className={styles.deliveryData}>
                        <div>
                            <MapPin size={16} weight="fill" />{' '}
                            <p>Entrega em Rua <span>João Daniel Martinelli, 102</span><br/>
                            Farrapos - Porto Alegre, RS</p>
                        </div>

                        <div>
                            <Timer size={16} weight="fill" />{' '}
                            <p>Previsão de entrega<br/>
                            <span>20 min - 30 min</span></p>
                        </div>

                        <div>
                            <CurrencyDollar size={16} weight="fill" />{' '}
                            <p>Pagamento na entrega<br/>
                            <span>Cartão de Crédito</span></p>
                        </div>
                    </div>

                    <img src={successImg} alt="Ilustração de uma moto de delivery" />
                </div>
            </div>
        </Layout>
    )
}