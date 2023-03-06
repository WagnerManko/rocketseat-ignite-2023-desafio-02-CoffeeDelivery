import { Header } from '../components/Header'
import { Banner } from '../components/Banner'

import styles from './styles.module.scss'

export function Home(){
    return (
        <div className={styles.home}>
            <Header />

            <Banner />
        </div>
    )
}