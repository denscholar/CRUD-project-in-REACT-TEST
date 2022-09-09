import React from 'react'

const Post = ({deletePost, posts}) => {
  return (
    <div>
        <h1>{posts.title}</h1>
        <p>{posts.body}</p>
        <div className="add-delete">
        <button onClick={()=>deletePost(posts.id) }>Delete Post</button>
        </div>
    </div>
  )
}

export default Post