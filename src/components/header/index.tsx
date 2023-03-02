import logo from '../../assets/cd-logo.svg'
import pin from '../../assets/icons/pin.svg'
import cart from '../../assets/icons/cart.svg'
import styles from './styles.module.scss'

export function Header(){
    return (
        <header className={styles.header}>
            <img src={logo} alt="Coffee Delivery Logo: A cup of coffee whit a rocket." />
            <div>
                <div>
                    <img src={pin} alt="Map pin." />
                    <span>Porto Alegre, RS</span>
                </div>

                <button>
                    <img src={cart} alt="Map pin." />
                </button>
            </div>
        </header>
    )
}