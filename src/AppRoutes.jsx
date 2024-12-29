import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Layout from './layouts/layout'
import Create from './components/Create'
import BlogDetails from './components/BlogDetails'
import NotFound from './components/NotFound'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/create" element={<Layout><Create /></Layout>} />
        {/* Dynamic routing : */}
        <Route path="/blogs/:id" element={<Layout><BlogDetails /></Layout>} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default AppRoutes


