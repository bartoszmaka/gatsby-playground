import React from 'react';

function BlogPost({ pageContext }) {
  const { text } = pageContext
  return (
    <div>
      <h1>Hi</h1>
      <p>{text}</p>
    </div>
  )
}

export default BlogPost
