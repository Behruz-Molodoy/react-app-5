import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import { HOME_PAGE, PRODUCT_PAGE, SERVICES_PAGE } from '../utils/const'
import { Context } from '../App'

export default function Navbar() {
  const [click, setClick] = useState(false)
  const [button] = useState(true)
  const { user , setUser } = useContext(Context)
  const handleClick = () => {
    setClick(!click)
  }
  const navLinks = [
    { to: HOME_PAGE, linkName: 'Home' },
    { to: PRODUCT_PAGE, linkName: 'Product' },
    { to: SERVICES_PAGE, linkName: 'Services' },
  ]
  const closeMobileMenu = () => {
    localStorage.clear()
    setUser(false)
  }
  return (
    <nav className='navbar'>
      <div className='navbar-container container'>
        <Link to={HOME_PAGE} className='navbar-logo'><i className='bx bx-fingerprint' ></i>Behruz</Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <i className='bx bx-x'></i> : <i className='bx bx-border-all'></i>}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {navLinks.map(({ linkName, to }) => (
            <li className='nav-item' key={to}>
              <Link to={to} className='nav-links' onClick={closeMobileMenu}>{linkName}</Link>
            </li>
          ))}
          <li className='nav-btn' onClick={closeMobileMenu}>
            {button
              ? (<Link to='sign-up' className='btn-link'>
                <Button buttonStyle='btn--outline'>{user ? 'Quit Login' : 'Sign-up'}</Button>
              </Link>)
              : (<Link to='sign-up' className='btn-link'>
                <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>{user ? 'Quit Login' : 'Sign-up'}</Button>
              </Link>)
            }
          </li>
        </ul>
      </div>
    </nav>
  )
}
