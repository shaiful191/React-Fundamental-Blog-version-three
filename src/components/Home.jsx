import React, { useEffect, useState } from 'react'
import BlogList from './BlogList';
import useFetch from '../CustomHooks/useFetch';
import { BlogsContext } from '../store/blogs-store';


const Home = () => {

  const { data: blogs, isLoaded, error } = useFetch("http://localhost:8000/blogs");

  //  const blogss = [{id: 100, title: "title", body: "body", author: "author"}];

  return (
    <BlogsContext.Provider value={blogs}>
      {error && <div>{error}</div>}
      {isLoaded && <div>Loading...</div>}
      {blogs && <BlogList title={"All Blogs"} />}
    </BlogsContext.Provider>

  )
}

export default Home