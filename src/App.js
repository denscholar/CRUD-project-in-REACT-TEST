import './App.css';
import { useEffect, useState } from 'react';
import Post from './component/Card/Post'
import AddForm from './component/AddForm/AddForm';


function App() {
  const [posts, setPosts] = useState([]);

  const deletePost = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
       method: 'DELETE',
    }).then((response) => {
       if (response.status === 200) {
          setPosts(
             posts.filter((post) => {
                return post.id !== id;
             })
          );
       } else {
          return;
       }
    });
    };
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then((response) => response.json())
           .then((data) => {
              console.log(data);
              setPosts(data);
           })
           .catch((err) => {
              console.log(err.message);
           });
  }, [])

    return (
    <div className="App">
      {posts.map((post) => (
      <div key={post.id}>
        <Post posts={post} deletePost={deletePost}/>
      </div>
        ))}
        <AddForm setPosts={setPosts}/>
    </div>
  );
}

export default App;
