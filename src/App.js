
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';

//This app can be easily converted to use react-router-dom syntax starting with import below
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


 import PortfolioContainer from './components/PortfolioContainer';

function App() {


  return (
<div className='appContainer'>
  <Header />
  <PortfolioContainer />
   

  <Footer />
</div>

  )
}

export default App;
