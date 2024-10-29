import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../../data/blogPosts.json'

const BlogPost = () => {
  const { slug } = useParams()
  const post = blogData.find((item) => item.slug === slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  )
}

export default BlogPost
