import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeButtonRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    if (isMenuOpen && closeButtonRef.current) {
      closeButtonRef.current.addEventListener('click', closeMenu)
    }
    return () => {
      if (closeButtonRef.current) {
        closeButtonRef.current.removeEventListener('click', closeMenu)
      }
    }
  }, [isMenuOpen])

  return (
    <header className={styles.headerContainer}>
      <Link to="/" className={styles.headerLogoLink}>
        <img
          src="/images/KuzmaDevComLogo.png"
          alt="KuzmaDevLogo"
          width="60px"
          height="60px"
          className={styles.headerLogoImage}
        />
      </Link>

      <div className={styles.headerChangeLanguage}></div>

      <button
        className={`${styles.headerMenuButton} ${
          isMenuOpen ? styles.hidden : ''
        }`}
        onClick={toggleMenu}
      >
        <span className={styles.firstBurgerLine}></span>
        <span className={styles.secondBurgerLine}></span>
        <span className={styles.thirdBurgerLine}></span>
      </button>
      <nav className={`${styles.headerNav} ${isMenuOpen ? styles.open : ''}`}>
        <ul className={styles.headerNavList}>
          <li className={styles.headerNavListItem}>
            <Link
              to="/"
              className={styles.headerNavListItemLink}
              onClick={toggleMenu}
              data-text="Home"
            >
              Home
            </Link>
          </li>
          <li className={styles.headerNavListItem}>
            <Link
              to="/about"
              className={styles.headerNavListItemLink}
              onClick={toggleMenu}
              data-text="About"
            >
              About
            </Link>
          </li>
          <li className={styles.headerNavListItem}>
            <Link
              to="/blog"
              className={styles.headerNavListItemLink}
              onClick={toggleMenu}
              data-text="Blog"
            >
              Blog
            </Link>
          </li>
          <li className={styles.headerNavListItem}>
            <Link
              to="/portfolio"
              className={styles.headerNavListItemLink}
              onClick={toggleMenu}
              data-text="Portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li className={styles.headerNavListItem}>
            <Link
              to="/contact"
              className={styles.headerNavListItemLink}
              onClick={toggleMenu}
              data-text="Contact"
            >
              Contact
            </Link>
          </li>
        </ul>
        <button
          ref={closeButtonRef}
          className={styles.headerCloseButton}
          aria-label="Close Menu"
        >
          <img src="/images/close.png" alt="close" width="40px" height="40px" />
        </button>
      </nav>
    </header>
  )
}

export default Header
