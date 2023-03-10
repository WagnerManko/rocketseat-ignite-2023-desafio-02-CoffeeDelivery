import { Delivery } from '../../components/Delivery';
import { Payment } from '../../components/Payment';
import { ShoppingCart } from '../../components/ShoppingCart';
import { Layout } from '../../layout';

import styles from './styles.module.scss'

export function Cart() {
    return (
        <Layout>
            <div className={styles.content}>
                <div className={styles.payment}>
                    <h1>Complete seu pedido</h1>

                    <div className={styles.delivery}>
                        <Delivery />
                    </div>

                    <div className={styles.delivery}>
                        <Payment />
                    </div>
                </div>

                <div className={styles.products}>
                    <h1>Cafés selecionados</h1>

                    <div className={styles.cart}>
                        <ShoppingCart />
                    </div>
                </div>
            </div>
        </Layout>
    )
}