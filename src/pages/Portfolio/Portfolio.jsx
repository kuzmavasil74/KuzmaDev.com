import React from 'react'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import data from '../../data/projects.json'

import styles from './Portfolio.module.css'
function Portfolio() {
  return (
    <div className={styles.portfolioContainer}>
      <Header />
      <div className={styles.portfolioHeader}>
        <h2 className={styles.portfolioTitle}>
          <span className={styles.portfolioTitleSpan}> My</span> portfolio
        </h2>
        <h3 className={styles.portfolioSubtitle}>
          Some Of My <span className={styles.portfolioSubtitleSpan}>Works</span>
        </h3>
      </div>
      <ul className={styles.portfolioContentProjectsList}>
        {data.projects.map((item, index) => (
          <li key={index} className={styles.portfolioContentProjectsListItem}>
            <div
              className={styles.portfolioContentProjectsListItemImgContainer}
            >
              <img
                className={styles.portfolioContentProjectsListItemImg}
                src={item.imageUrl}
                alt={item.title}
              />
            </div>
            <a
              href={item.url}
              className={styles.portfolioContentProjectsListItemLink}
            >
              <strong
                className={styles.portfolioContentProjectsListItemLinkTitle}
              >
                {item.title}
              </strong>
            </a>
            <p className={styles.portfolioContentProjectsListItemDesc}>
              {item.description}
            </p>
            <p className={styles.portfolioContentProjectsListItemRole}>
              <strong>Role:</strong> {item.role}
            </p>
            <p className={styles.portfolioContentProjectsListItemType}>
              <strong>Type:</strong> {item.type}
            </p>
          </li>
        ))}
      </ul>
      <ul className={styles.portfolioContentProBonoList}>
        <h2 className={styles.portfolioContentProBonoTitle}>
          Pro Bono{' '}
          <span className={styles.portfolioContentProBonoTitleSpan}>
            Projects
          </span>
        </h2>
        {data.pro_bono_projects.map((item, index) => (
          <li key={index} className={styles.portfolioContentProjectsListItem}>
            <div
              className={styles.portfolioContentProjectsListItemImgContainer}
            >
              <img
                className={styles.portfolioContentProjectsListItemImg}
                src={item.imageUrl}
                alt={item.title}
              />
            </div>
            <a
              href={item.url}
              className={styles.portfolioContentProjectsListItemLink}
            >
              <strong
                className={styles.portfolioContentProjectsListItemLinkTitle}
              >
                {item.title}
              </strong>
            </a>
            <p className={styles.portfolioContentProjectsListItemDesc}>
              {item.description}
            </p>
            <p className={styles.portfolioContentProjectsListItemRole}>
              <strong>Role:</strong> {item.role}
            </p>
            <p className={styles.portfolioContentProjectsListItemType}>
              <strong>Type:</strong> {item.type}
            </p>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  )
}

export default Portfolio
