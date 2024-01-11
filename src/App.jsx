import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Tracking from './Pages/Tracking'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tracking' element={<Tracking/>} />
      </Routes>
    </Router>
  )
}

export default App