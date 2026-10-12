import React from 'react'

import styles from './Footer.module.css'

const links = [
  ['GitHub', 'https://github.com/kuzmavasil74'],
  ['LinkedIn', 'https://www.linkedin.com/in/vasylkuzma'],
  ['Telegram', 'https://t.me/Vasyl_Kuzma'],
  ['Email', 'mailto:kuzmavasil.v@gmail.com'],
]

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <ul className={styles.footerLinks}>
        {links.map(([name, href]) => (
          <li key={name}>
            <a
              href={href}
              className={styles.footerLink}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
      <p className={styles.footerTitle}>
        © {new Date().getFullYear()} Vasyl Kuzma
      </p>
    </footer>
  )
}

export default Footer
