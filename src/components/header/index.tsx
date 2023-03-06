import logo from '../../assets/cd-logo.svg'
import pin from '../../assets/icons/pin.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'
import styles from './styles.module.scss'

export function Header(){
    return (
        <header className={styles.header}>
            <img src={logo} alt="Coffee Delivery Logo: A cup of coffee whit a rocket." />
            <div>
                <div>
                    <MapPin size={20} weight="fill" />
                    <span>Porto Alegre, RS</span>
                </div>

                <button>
                    <ShoppingCart size={22} weight="fill" />
                </button>
            </div>
        </header>
    )
}