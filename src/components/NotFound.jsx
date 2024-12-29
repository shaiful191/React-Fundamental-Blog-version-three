import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <div className="not-found">
        <h1>404</h1>
        <p>Page Not Found</p>
      </div>

      <div className="back-home">
        <Link to="/">Back to Home</Link>
      </div>
    </>

  )
}

export default NotFound