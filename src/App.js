import React from 'react'
import Home from './Components/Home';
// import Hero from './Components/Hero/Hero';
// import Programs from './Components/Programs/Programs'; 
// import Plans from './Components/Plans/plans';
// import Reasons from './Components/Reasons/Reasons';
// import Testimonials from './Components/Testimonials/Testimonials';
// import Join from './Components/Join/Join';
// import Footer from './Components/Footer/Footer';
import News from './Components/News/News'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
  <BrowserRouter>
    <div className="App">
            <Routes>
                <Route path="/news" element={<News/>} /> 
                <Route path="/" element={<Home />} /> 
            </Routes>
        
      {/* <Hero/>
      <Programs/>
      <Plans/>
      <Reasons/>
      <Testimonials/>
      <Join/>
      <Footer/> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
