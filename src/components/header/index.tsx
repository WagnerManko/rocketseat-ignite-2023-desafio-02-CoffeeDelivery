import { NavLink } from 'react-router-dom'

import { ShoppingCart, MapPin } from 'phosphor-react'

import logo from '../../assets/cd-logo.svg'
import styles from './styles.module.scss'

import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header(){
    const { cartItems } = useContext(CartContext)

    return (
        <header className={styles.header}>
            <NavLink to="/" title="Home">
                <img src={logo} alt="Coffee Delivery Logo: A cup of coffee whit a rocket." />
            </NavLink>
            <div>
                <div>
                    <MapPin size={20} weight="fill" />
                    <span>Porto Alegre, RS</span>
                </div>

                <NavLink to="/cart" title="Cart">
                    <button>
                        <ShoppingCart size={22} weight="fill" />
                        <span><p>{cartItems.length}</p></span>
                    </button>
                </NavLink>
            </div>
        </header>
    )
}