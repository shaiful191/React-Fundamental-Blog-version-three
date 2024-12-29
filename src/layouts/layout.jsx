import Navber from "../components/Navber"

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Navber />
      <div className="content">
        
        {/* <OldHome2 />  */}
        {children}
      </div>
    </div>
  )
}

export default Layout