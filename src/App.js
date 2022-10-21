import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/layout/header/Header.jsx'

function App() {
  return (
    <>
      <Router>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
