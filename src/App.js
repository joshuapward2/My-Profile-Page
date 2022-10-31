import React,{useState} from 'react';

import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
// import Project from './components/Project';
// import AboutMe from ''

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Projects from './pages/Projects'
import PortfolioContainer from './components/PortfolioContainer';

function App() {


  return (
<div>
  {/* <Header /> */}
  <PortfolioContainer />
  

  <Footer />
</div>

  )
}

export default App;
