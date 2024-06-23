
import React, { useEffect } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

import { toast,Toaster } from 'sonner'


import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';



const App = () => {
  
  return (
    <>
    <Toaster richColors closeButton position='top-right' />
    <Router>
      <Routes>
    <Route exact path='/' element={<Home/>}  />
    <Route exact path='/signup' element={<SignUp/>}  />
    <Route exact path='/login' element={<Login/>}  />
    </Routes>
  </Router>
  
    
    </>
  )
}

export default App