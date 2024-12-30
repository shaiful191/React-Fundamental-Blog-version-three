import Footer from "../components/Footer"
import Navber from "../components/Navber"

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Navber />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout