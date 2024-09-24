import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerLogo}>
        <img
          src="/images/KuzmaDevComLogo.svg"
          alt="KuzmaDev Logo"
          width="80px"
          className={styles.footerLogoImage}
        />
      </div>
      <nav className={styles.footerQuickLinks}>
        <ul className={styles.footerQuickLinksList}>
          <li>
            <Link to="/about" className={styles.footerQuickLinksListItem}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className={styles.footerQuickLinksListItem}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/skills" className={styles.footerQuickLinksListItem}>
              Skills
            </Link>
          </li>
        </ul>
      </nav>
      <nav className={styles.footerSocialLinks}>
        <ul className={styles.footerSocialLinksList}>
          <li>
            <a
              href="https://github.com/kuzmavasil74"
              target="_blank"
              rel="noreferrer"
              className={styles.footerSocialLinksListItem}
            >
              <img
                className={styles.footerSocialLinksListItemImage}
                src="/images/gitHubLogo.svg"
                alt="github-link"
                width="20px"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/kuzmavasil"
              target="_blank"
              rel="noreferrer"
              className={styles.footerSocialLinksListItem}
            >
              <img
                className={styles.footerSocialLinksListItemImage}
                src="/images/instagramLogo.svg"
                alt="instagram-link"
                width="20px"
              />
            </a>
          </li>
          <li>
            <a
              href="tel:+420776788319"
              className={styles.footerSocialLinksListItem}
            >
              <img
                className={styles.footerSocialLinksListItemImage}
                src="/images/telephoneLogo.svg"
                alt="telephone-link"
                width="20px"
              />
            </a>
          </li>
          <li>
            <a
              href="mailto:kuzmavasil.v@gmail.com"
              className={styles.footerSocialLinksListItem}
            >
              <img
                className={styles.footerSocialLinksListItemImage}
                src="/images/mailLogo.svg"
                alt="mail-link"
                width="20px"
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
