
import React from 'react'
import Home from './pages/Home'


import { toast,Toaster } from 'sonner'


import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import RegisterForm from './pages/RegisterForm'
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndService from './pages/TermsAndService';



const App = () => {

  return (
    <>
    <Toaster richColors closeButton position='top-right' />
    <Router>
      <Routes>
    <Route exact path='/' element={<Home/>}  />
    <Route exact path='/register/' element={<RegisterForm/>}  />
    <Route exact path='/termsAndService/' element={<TermsAndService/>}  />
    <Route exact path='/privacyPolicy/' element={<PrivacyPolicy/>}  />
    </Routes>
  </Router>
  
    
    </>
  )
}

export default App