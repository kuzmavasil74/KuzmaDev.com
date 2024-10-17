import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

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
          <li className={styles.blogSectionListItem}>
            <a href="/images/blogs/post-one.jpg" alt="post-one">
              <div className={styles.blogSectionListItemImgCard}>
                <img className={styles.blogSectionListItemImg} src="" alt="" />
                <div className={styles.blogSectionListItemText}>
                  <h3 className={styles.blogSectionListItemTextTitle}></h3>
                  <p className={styles.blogSectionListItemTextDesc}></p>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </section>
      <Footer />
    </div>
  )
}
export default Blog
