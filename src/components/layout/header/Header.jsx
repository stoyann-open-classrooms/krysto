import { Link } from 'react-router-dom'
import logo from '../../../assets/logo_krysto.svg'
import './Header.css'
import { useState } from 'react'

function Header() {
  const [toggle, setToggle] = useState(false)
  const toggleNav = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <div
        onClick={toggleNav}
        className={toggle ? 'overlay-show' : 'overlay'}
      ></div>
      <div
        className={toggle ? 'mobile-main-menu show-menu' : 'mobile-main-menu'}
      >
        <ul>
          {/* // mobile only */}

          <li className="mobile-only">
            <Link to={'/'}>Accueil</Link>
          </li>
          <li className='mobile-only'>
              <Link to={'/shop'}>Nos produits</Link>
            </li>
            <li className='mobile-only'>
              <Link to={'/event'}>Événements</Link>
            </li>
            <li className='mobile-only'>
              <Link to={'/blog'}>partenaires</Link>
            </li>
            <li className='mobile-only'>
              <Link to={'/blog'}>revendeurs</Link>
            </li>
         
            
            <li>
              <Link to={'/about'}>A propos</Link>
            </li>

            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
         
        </ul>
      </div>
      <header className="main-header">
        <div>
          <Link className="logo" to={'/'}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <nav className="desktop-main-menu">
          <ul>
            <li>
              <Link to={'/'}>Accueil</Link>
            </li>
            <li>
              <Link to={'/shop'}>Nos produits</Link>
            </li>
            <li>
              <Link to={'/event'}>Recycler avec Krysto</Link>
            </li>
            <li>
              <Link to={'/blog'}>partenaires</Link>
            </li>
            <li>
              <Link to={'/blog'}>revendeurs</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div
        onClick={toggleNav}
        className={toggle ? 'hamburger open' : 'hamburger'}
        type="button"
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </div>
    </>
  )
}

export default Header
