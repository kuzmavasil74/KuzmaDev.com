import React from 'react'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import data from '../../data/projects.json'

import styles from './Portfolio.module.css'

function ProjectCard({ project }) {
  return (
    <li className={styles.card}>
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className={styles.cardImageLink}
        aria-label={`Open ${project.title}`}
      >
        <img
          className={styles.cardImage}
          src={project.imageUrl}
          alt={`${project.title} screenshot`}
          loading="lazy"
          decoding="async"
          width="1200"
          height="625"
        />
      </a>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardType}>{project.type}</p>
        <p className={styles.cardDesc}>{project.description}</p>
        <p className={styles.cardMeta}>
          <strong>Role:</strong> {project.role}
        </p>
        <ul className={styles.cardStack}>
          {project.stack.split(', ').map((tech) => (
            <li key={tech} className={styles.cardStackItem}>
              {tech}
            </li>
          ))}
        </ul>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className={styles.cardButton}
        >
          View project
        </a>
      </div>
    </li>
  )
}

function ProjectSection({ title, accent, projects }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>
        {title} <span className={styles.accent}>{accent}</span>
      </h2>
      <ul className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ul>
    </section>
  )
}

function Portfolio() {
  return (
    <div className={styles.portfolioContainer}>
      <Header />
      <div className={styles.portfolioHeader}>
        <h1 className={styles.portfolioTitle}>
          <span className={styles.accent}>My</span> portfolio
        </h1>
        <p className={styles.portfolioSubtitle}>
          Some Of My <span className={styles.accent}>Works</span>
        </p>
      </div>
      <ProjectSection
        title="Commercial &"
        accent="Client Projects"
        projects={data.commercial_projects}
      />
      <ProjectSection
        title="Study &"
        accent="Team Projects"
        projects={data.projects}
      />
      <Footer />
    </div>
  )
}

export default Portfolio
