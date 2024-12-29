import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('shaiful');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsLoading(true);

    // console.log(blog);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log("new blog created");
      setIsLoading(false);
      navigate("/");
    });
  }

  return (
    <div className='create'>
      <h2>Add A New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}>
          <option value="shaiful">shaiful</option>
          <option value="abdulla">abdulla</option>
        </select>


        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button disabled>Adding...</button>}

      </form>
    </div>
  )
}

export default Create