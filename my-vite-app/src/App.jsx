import Login from './components/login'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
      </Routes>
    </Router>
  )
}

export default App
