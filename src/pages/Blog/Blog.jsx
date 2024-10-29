import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import data from '../../data/blogPosts.json'

import styles from './Blog.module.css'

function Blog() {
  return (
    <div>
      <Header />
      <section className={styles.blogSection}>
        <div className={styles.blogHeader}>
          <h2 className={styles.blogSectionTitle}>Blogs</h2>
          <p className={styles.blogSectionTitleDesc}>
            My latest{' '}
            <span className={styles.blogSectionListItemDescSpan}>
              blog posts.
            </span>
          </p>
        </div>
        <ul className={styles.blogSectionList}>
          {data.map((blogs) => (
            <li key={blogs.id} className={styles.blogSectionListItem}>
              <div className={styles.blogSectionListItemImgCard}>
                <img
                  className={styles.blogSectionListItemImg}
                  src={blogs.imageUrl}
                  alt={blogs.slug}
                />
                <p className={styles.blogSectionListItemImgDate}>
                  {blogs.date}
                </p>
              </div>
              <div className={styles.blogSectionListItemText}>
                <h3 className={styles.blogSectionListItemTextTitle}>
                  {blogs.title}
                </h3>
                <p className={styles.blogSectionListItemTextDesc}>
                  {blogs.shortContent}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </div>
  )
}
export default Blog
