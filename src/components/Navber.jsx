import React from 'react'
import { Link } from 'react-router-dom'


const Navber = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-5 mb-2 mb-md-0">
          <h2 className='primaryColor'>The Fundamental Blog(V3)</h2>
        </div>

        <div className="col-md-3 text-end">
          <Link to="/" className="btn btn-outline-primary custom-btn me-2">Home</Link>
          <Link to="/create" className="btn  bgPrimaryColor">New Blog</Link>
        </div>
      </header>
    </div>
  );
}
export default Navber