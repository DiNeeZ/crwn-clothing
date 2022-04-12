import { Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import styled from 'styled-components'

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: flex;
`
export const LogoContainer = styled(Link)`
  width: 100px;
  padding: 15px 25px;
`

export const Logo = styled(CrwnLogo)`
  width: 100%;
`
export const Nav = styled.nav`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const NavList = styled.ul`
  display: flex;
  align-items: center;
`
export const NavItem = styled.li`
  margin-right: 10px;
`

export const NavLink = styled(Link)`
  position: relative;
  font-size: 18px;
  padding: 10px 15px;
  font-weight: 500;
  text-transform: uppercase;
  color: #505050;
`
