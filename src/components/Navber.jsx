import React from 'react'
import { Link } from 'react-router-dom'

const Navber = () => {

  const linkBtnStyle = {
    color: 'white',
    backgroundColor: '#f97316',
    borderRadius: '8px',
  };
  
  return (
    <nav className="navbar">
      <h1>The Fundamental Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={linkBtnStyle}>New Blog</Link>
      </div>
    </nav>
  )
}

export default Navber