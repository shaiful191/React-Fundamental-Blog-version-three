import React, { useEffect, useState } from 'react'
import BlogList from './BlogList';
import useFetch from '../CustomHooks/useFetch';


const Home = () => {

  const { data: blogs, isLoaded, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoaded && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
    </div>
  )
}

export default Home