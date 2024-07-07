
import React, { useEffect } from 'react'
import Home from './pages/Home'


import { toast,Toaster } from 'sonner'


import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import RegisterForm from './pages/RegisterForm'



const App = () => {

  return (
    <>
    <Toaster richColors closeButton position='top-right' />
    <Router>
      <Routes>
    <Route exact path='/' element={<Home/>}  />
    <Route exact path='/register/' element={<RegisterForm/>}  />
    </Routes>
  </Router>
  
    
    </>
  )
}

export default App