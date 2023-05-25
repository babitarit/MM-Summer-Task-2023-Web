// import React from 'react'


import{BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from'./pages/Home'
import About from'./pages/About';
import Adminpanel from'./pages/Adminpanel';
import Articles from'./pages/Articles';
import Pagenotfound from'./pages/Pagenotfound';

const App = () => {
  return (
    <div>
    
   <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/about" element={<About/>}/>
      <Route  path="/Adminpanel" element={<Adminpanel/>}/>
      <Route  path="/Articles" element={<Articles/>}/>
      <Route  path="*" element={<Pagenotfound/>}/>
    </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App