import { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'

const Navigation = () => {
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
              <Link className='nav-link' to='/sign-in'>
                Sign In
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </Fragment>

  )
}

export default Navigation