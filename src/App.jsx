import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './assets/components/Navbar'
import Home from './assets/pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
 
      <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
   
  )
}

export default App
