import { Header } from '../components/Header'
import { Banner } from '../components/Banner'

import styles from './styles.module.scss'
import { CoffeeList } from '../components/CoffeeList'
import { CartContextProvider } from '../contexts/CartContext'

export function Home(){
    return (
        <CartContextProvider>
            <div className={styles.home}>
                <Header />

                <Banner />

                <CoffeeList />
            </div>
        </CartContextProvider>
    )
}