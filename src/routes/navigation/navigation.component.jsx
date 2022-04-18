import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { signOutUser } from '../../utils/firebase/firebase.utils'
import { selectCurrentUser } from '../../store/user/user.selector'

import {
  NavigationContainer,
  LogoContainer,
  Logo,
  Nav,
  NavList,
  NavItem,
  NavLink
} from './navigation.styles.jsx'
import { selectIsCartOpen } from '../../store/cart/cart.selector'

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)

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