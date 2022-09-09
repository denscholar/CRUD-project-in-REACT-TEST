import React, {useState} from 'react';
import './AddForm.css';

const AddForm = ({setPosts}) => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        addPosts(title, body);
     };

     // Add a post logic
  const addPosts = async (title, body) => {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
       method: 'POST',
       body: JSON.stringify({
          title: title,
          body: body,
          id: Math.random().toString(36).slice(2),
       }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
       },
    })
       .then((response) => response.json())
       .then((data) => {
          setPosts((posts) => [data, ...posts]);
          setTitle('');
          setBody('');
       })
       .catch((err) => {
          console.log(err.message);
       });
 };
  return (
    <div className='form-control'>
        <form onSubmit={handleSubmit}>
            <input type="text" value={title}
               onChange={(e) => setTitle(e.target.value)}
            /> <br />
            <textarea name="" id="" cols="100" rows="8" 
               value={body} onChange={(e) => setBody(e.target.value)} 
            ></textarea><br />
            <button type="submit">Add Post</button>
         </form>
    </div>
  )
}

export default AddForm