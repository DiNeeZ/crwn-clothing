import { Fragment, useContext } from 'react'
import { Outlet } from 'react-router-dom'

import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'

import {
  NavigationContainer,
  LogoContainer,
  Logo,
  Nav,
  NavList,
  NavItem,
  NavLink
} from './navigation.styles.jsx'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <Logo />
        </LogoContainer>
        <Nav>
          <NavList>
            <NavItem>
              <NavLink to='/shop'>
                Shop
              </NavLink>
            </NavItem>
            <NavItem >
              {
                currentUser ?
                  <NavLink as='span' onClick={signOutUser} style={{ cursor: 'pointer' }}>
                    Sign Out
                  </NavLink>
                  :
                  (<NavLink to='/auth'>
                    Sign In
                  </NavLink>)
              }
            </NavItem>
            <NavItem>
              <CartIcon />
            </NavItem>
          </NavList>
        </Nav>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>

  )
}

export default Navigation