import AppRoutes from './AppRoutes'
import { BrowserRouter as Router } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App
