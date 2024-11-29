import './App.css'

import { BrowserRouter,Routes , Route } from 'react-router-dom';

import Navbar from './Navbar'

function App() {

  return (
    <>
       <BrowserRouter>
          
          <Navbar />

          <Routes>

            <Route path='/' element={<div>Home</div>} />
            
            <Route path='/about' element={<div>About</div>} />
            
            <Route path='/contactus' element={<div>contactus</div>} />
            
            <Route path='/login-register' element={<div>Login</div>} />

            <Route path='/profile' element={<div>Profile</div>} />

          </Routes>

       </BrowserRouter>
    </>
  )
}

export default App
