import React, { useState } from 'react';
import Home from '../pages/Home';
import Skills from '../pages/Skills';
import Project from '../pages/Project';
import Contact from '../pages/Contact';
import Navigation from '../Navigation';
import Resume from '../pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // Rendering components and pages

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
     if (currentPage === 'Skills') {
      return <Skills />;
     }
    if (currentPage === 'Project') {
      return <Project />;
    }
    if (currentPage === 'Contact') {
    return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
      }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* I am passing the currentPage from state and the function to update it */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here i am calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}