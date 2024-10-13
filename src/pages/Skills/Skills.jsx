import React from 'react'

import styles from './Skills.module.css'
function Skills() {
  return (
    <section className={styles.homeSectionSkills}>
      <h2 className={styles.homeSectionSkillsTitle}>Technical Skills</h2>
      <ul className={styles.homeSectionSkillsList}>
        <li className={styles.homeSectionSkillsListItem}>React</li>
        <li className={styles.homeSectionSkillsListItem}>Node.js</li>
        <li className={styles.homeSectionSkillsListItem}>MongoDB</li>
        <li className={styles.homeSectionSkillsListItem}>Express</li>
        <li className={styles.homeSectionSkillsListItem}>HTML</li>
        <li className={styles.homeSectionSkillsListItem}>CSS</li>
        <li className={styles.homeSectionSkillsListItem}>JavaScript</li>
        <li className={styles.homeSectionSkillsListItem}>Git</li>
        <li className={styles.homeSectionSkillsListItem}>GitHub</li>
        <li className={styles.homeSectionSkillsListItem}>Figma</li>
      </ul>

      <h2 className={styles.homeSectionSkillsTitle}>Soft Skills</h2>
      <ul className={styles.homeSectionSkillsList}>
        <li className={styles.homeSectionSkillsListItem}>Leadership</li>
        <li className={styles.homeSectionSkillsListItem}>Communication</li>
        <li className={styles.homeSectionSkillsListItem}>Problem-solving</li>
        <li className={styles.homeSectionSkillsListItem}>Teamwork</li>
        <li className={styles.homeSectionSkillsListItem}>Creativity</li>
        <li className={styles.homeSectionSkillsListItem}>Self-motivation</li>
        <li className={styles.homeSectionSkillsListItem}>Time management</li>
        <li className={styles.homeSectionSkillsListItem}>Collaboration</li>
        <li className={styles.homeSectionSkillsListItem}>Adaptability</li>
      </ul>
    </section>
  )
}
export default Skills
