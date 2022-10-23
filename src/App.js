import React,{useState} from 'react';
import Header from './components/Header'
import './App.css';
import Footer from './components/Footer';
import Project from './components/Project';
import AboutMe from ''

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
