import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={styles.headerContainer}>
      <Link to="/" className={styles.headerLogoLink}>
        <img
          src="/images/KuzmaDevComLogo.png"
          alt="KuzmaDev home"
          width="60"
          height="60"
          className={styles.headerLogoImage}
        />
      </Link>

      <div className={styles.headerChangeLanguage}></div>

      <button
        className={`${styles.headerMenuButton} ${
          isMenuOpen ? styles.hidden : ''
        }`}
        onClick={toggleMenu}
        aria-label="Open menu"
        aria-expanded={isMenuOpen}
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
              onClick={closeMenu}
              data-text="Home"
            >
              Home
            </Link>
          </li>
          <li className={styles.headerNavListItem}>
            <Link
              to="/about"
              className={styles.headerNavListItemLink}
              onClick={closeMenu}
              data-text="About"
            >
              About
            </Link>
          </li>
          <li className={styles.headerNavListItem}>
            <Link
              to="/blog"
              className={styles.headerNavListItemLink}
              onClick={closeMenu}
              data-text="Blog"
            >
              Blog
            </Link>
          </li>
          <li className={styles.headerNavListItem}>
            <Link
              to="/portfolio"
              className={styles.headerNavListItemLink}
              onClick={closeMenu}
              data-text="Portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li className={styles.headerNavListItem}>
            <Link
              to="/contact"
              className={styles.headerNavListItemLink}
              onClick={closeMenu}
              data-text="Contact"
            >
              Contact
            </Link>
          </li>
        </ul>
        <button
          type="button"
          onClick={closeMenu}
          className={styles.headerCloseButton}
          aria-label="Close menu"
        >
          <img src="/images/close.png" alt="" width="40" height="40" />
        </button>
      </nav>
    </header>
  )
}

export default Header
