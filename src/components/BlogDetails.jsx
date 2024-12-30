import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../CustomHooks/useFetch";
import { MdDelete } from "react-icons/md";
import { useReducer, useEffect } from "react";

const blogReducer = (currentBlog, action) => {

  let newBlog = currentBlog;
  if (action.type === "SET_BLOG") {
    newBlog = action.payload;
  } else if (action.type === "DELETE_BLOG") {
    fetch("http://localhost:8000/blogs/" + action.payload.id, {
      method: "DELETE"
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to delete. Status: ${response.status}`);
        }
        newBlog = {};
        action.payload.navigate("/");
      })
      .catch((err) => console.error("Error deleting blog:", err.message));
  }
  return newBlog;

};

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isLoading } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();

  const [newBlog, dispatchBlog] = useReducer(blogReducer, {});

  useEffect(() => {
    if (blog) {
      const setBlog = {
        type: "SET_BLOG",
        payload: blog
      };
      dispatchBlog(setBlog);
    }
  }, [blog]);

  const handleDelete = () => {

    const deleteBlogAction = {
      type: "DELETE_BLOG",
      payload: {
        id: blog.id,
        navigate: navigate
      }
    };
    dispatchBlog(deleteBlogAction);
  }

  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {newBlog && (
        <article>
          <h2>{newBlog.title}</h2>
          <p>Written by {newBlog.author}</p>
          <div>{newBlog.body}</div>

          <button onClick={handleDelete}>
            <MdDelete style={{ color: "white", fontSize: "24px" }} />
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;








/*

import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../CustomHooks/useFetch";
import { MdDelete } from "react-icons/md";
import { useReducer } from "react";

const blogReducer = (currentBlog, action) => {

  let newBlog = currentBlog;
  console.log(newBlogList);
  if (action.type === "DELETE_BLOG") {
    
    fetch("http://localhost:8000/blogs/" + action.payload.id, {
      method: "DELETE"
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to delete. Status: ${response.status}`);
        }
        newBlog = {};
        action.payload.navigate("/");
      })
      .catch((err) => console.error("Error deleting blog:", err.message));
    
  }
  return newBlog;
}
const BlogDetails = () => {

  const { id } = useParams();
  const { data: blog, error, isLoading } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();
  
  // console.log(blog)
  const [newBlog, dispatchBlog] = useReducer(blogReducer, blog);
  console.log(newBlog)
  
  const handleDelete = () => {

    const deleteBlogAction = {
      type: "DELETE_BLOG",
      payload: {
        id: blog.id,
        navigate:navigate
      }
    };
    dispatchBlog(deleteBlogAction);
  }


  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {newBlog && (
        <article>
          <h2>{newBlog.title}</h2>
          <p>Written by {newBlog.author}</p>
          <div>{newBlog.body}</div>

          <button onClick={handleDelete}>
            <MdDelete style={{ color: "white", fontSize: "24px" }} />
          </button>

        </article>
      )}
    </div>
  );
}

export default BlogDetails;

*/