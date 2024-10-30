import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import data from '../../data/blogPosts.json'

import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

import styles from './BlogPost.module.css'

const BlogPost = () => {
  const { id } = useParams()
  const blog = data.find((blog) => blog.id === parseInt(id))

  if (!blog) {
    return <div>Post not found</div>
  }
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <div>
      <Header />
      <article className={styles.blogPost}>
        {blog.imageUrl && (
          <div className={styles.blogPostSectionListItemImgCard}>
            <img
              className={styles.blogPostSectionListItemImg}
              src={blog.imageUrl}
              alt={blog.title}
            />
            <p className={styles.blogPostSectionListItemImgDate}>{blog.date}</p>
          </div>
        )}
        <div className={styles.blogPostSectionListItemText}>
          <header className={styles.blogPostSectionListItemTextTitle}>
            {blog.title}
          </header>
          {blog.content.map((section, index) => (
            <div key={index}>
              <h3 className={styles.blogPostSectionListItemTextTitleDesc}>
                {section.sectionTitle}
              </h3>
              <p className={styles.blogPostSectionListItemTextDesc}>
                {section.text}
              </p>
            </div>
          ))}
        </div>
        <button onClick={handleGoBack} className={styles.blogPostBackButton}>
          Back
        </button>
      </article>
      <Footer />
    </div>
  )
}

export default BlogPost
