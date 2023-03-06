import banner from '../../assets/cd-banner.png'
import { InfoCards } from '../InfoCards'
import styles from './styles.module.scss'

export function Banner(){
    return (
        <div className={styles.banner}>
            <div className={styles.bannerText}>
                <div className={styles.title}>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
                </div>

                <div className={styles.differentials}>
                    <InfoCards icon="cart" />
                    <InfoCards icon="package" />
                    <InfoCards icon="timer" />
                    <InfoCards icon="coffee" />
                </div>
            </div>

            <img src={banner} alt="Image of a caffee cup." />
        </div>
    )
}