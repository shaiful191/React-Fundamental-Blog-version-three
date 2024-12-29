
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => { 

  const titleElement = useRef('');
  const bodyElement = useRef('');
  const authorElement = useRef('shaiful');


  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const author = authorElement.current.value;


    const blog = { title, body, author };

    titleElement.current.value = '';
    bodyElement.current.value = '';
    authorElement.current.value = 'shaiful';

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
          ref={titleElement}
        />
        <label>Blog body:</label>
        <textarea
          required
          ref={bodyElement}
        ></textarea>
        <label>Blog author:</label>
        <select
          ref={authorElement}>
          <option value="shaiful">shaiful</option>
          <option value="abdulla">abdulla</option>
        </select>


        {!isLoading && <button >Add Blog</button>}
        {isLoading && <button disabled>Adding...</button>}

      </form>
    </div>
  )
}

export default Create