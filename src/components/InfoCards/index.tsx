import { ShoppingCart, Package, Timer, Coffee} from 'phosphor-react'
import styles from './styles.module.scss'

interface InfoCardsProps {
    icon: 'cart' | 'package' | 'timer' | 'coffee';
}

export function InfoCards({icon}: InfoCardsProps){
    return (
        <div className={styles.info}>

            {icon === 'cart' ? (
                <>
                    <span className={styles.cart}>
                        <ShoppingCart size={16} weight="fill" />
                    </span>
                    <p>Compra simples e segura</p>
                </>
            ): icon === 'package' ? (
                <>
                    <span className={styles.package}>
                        <Package size={16} weight="fill" />
                    </span>
                    <p>Embalagem mantém o café intacto</p>
                </>
            ): icon === 'timer' ? (
                <>
                    <span className={styles.timer}>
                        <Timer size={16} weight="fill" />
                    </span>
                    <p>Entrega rápida e rastreada</p>
                </>
            ): (
                <>
                    <span className={styles.coffee}>
                        <Coffee size={16} weight="fill" />
                    </span>
                    <p>O café chega fresquinho até você</p>
                </>
            )}
        </div>
    )
}