import styles from "./Nav.module.css"
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <>
      {/* <header> */}
        <nav className={styles.nav}>
          <Link to="/" className={styles.nav__link}>Home</Link>
          <Link to="/" className={styles.nav__link}>About Us</Link>
          <Link to="/" className={styles.nav__link}>Our Services</Link>
          <Link to="/" className={styles.nav__link}>Contact</Link>
        </nav>
      {/* </header> */}
    </>
  )
}
