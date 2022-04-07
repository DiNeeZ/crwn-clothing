import { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'

import './navigation.styles.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <Fragment>
      <div className='navigation'>
        <div className='logo-container'>
          <Link to='/'>
            <CrwnLogo className='logo' />
          </Link>
        </div>
        <nav className='nav'>
          <ul className='nav-list'>
            <li className='nav-item'>
              <Link className='nav-link' to='/shop'>
                Shop
              </Link>
            </li>
            <li className='nav-item'>
              {
                currentUser ?
                  <span
                    className='nav-link'
                    style={{ cursor: 'pointer' }}
                    onClick={signOutUser}>Sign Out</span>
                  :
                  (<Link className='nav-link' to='/auth'>
                    Sign In
                  </Link>)
              }
            </li>
            <li className='nav-item'>
              <CartIcon />
            </li>
          </ul>
        </nav>
        { isCartOpen && <CartDropdown /> }
      </div>
      <Outlet />
    </Fragment>

  )
}

export default Navigation