import {
  FaFacebook,
  FaInstagram,

} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './footer.css'
function Footer() {
  return (
    <>
      <footer className="footer">
        <ul className="social-link-list">
          <li>
            <FaFacebook />
            <a href="https://www.facebook.com/profile.php?id=100063448976801">Facebook</a>
          </li>
          <li>
            <FaInstagram/>
            <Link to={'#'}>Instagram</Link>
          </li>
        </ul>
        <ul className='social-link-list'>
        <li >
           
          <Link to={'/CGU'}>CGU</Link>
          </li>
          <li>
          <Link to={'/CGV'}>CGV</Link>
           
            
          </li>

        </ul>
        <p> INITATIVE-PLASTIC.COM © Tous droits réservés - 2022</p>
      </footer>
    </>
  )
}

export default Footer
