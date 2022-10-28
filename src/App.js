import React,{useState} from 'react';


import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Project from './components/Project';
import AboutMe from ''

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Projects from './pages/Projects'


function App() {
const [page, setPage] = useState(< Project />);

  return (
<div>
  <Header setPage={setPage} AboutMe={AboutMe} />
  
{page}
  <Footer />
</div>

  )
}

export default App;
