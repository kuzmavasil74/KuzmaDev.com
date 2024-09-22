import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/images/KuzmaDevComLogo.svg'
import styles from './Header.module.css'
function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerLogo}>
        <Link to="/" className={styles.headerLogoLink}>
          <img
            src={logo}
            alt="KuzmaDev Logo"
            width="80px"
            className={styles.headerLogoImage}
          />
        </Link>
      </div>
      <div className={styles.headerChangeLanguage}></div>
      <nav className={styles.headerNav}>
        <ul className={styles.headerNavList}>
          <li>
            <Link to="/about" className={styles.headerNavListItem}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className={styles.headerNavListItem}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/skills" className={styles.headerNavListItem}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/contact" className={styles.headerNavListItem}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/blog" className={styles.headerNavListItem}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/resume" className={styles.headerNavListItem}>
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
