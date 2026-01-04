// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './components/UI/SignUp'
import SignIn from './components/UI/SignIn'
import './App.css'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ < Home />}/>
        <Route path='SignUp' element={ < SignUp /> }/>
        <Route path='SignIn' element={ < SignIn /> } />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
