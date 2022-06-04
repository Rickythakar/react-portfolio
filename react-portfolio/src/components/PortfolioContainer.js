import React, { useState } from 'react';
import Home from './pages/Home';
import Navigation from './Navigation';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    } 
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  }


    const handlePageChange = (page) => setCurrentPage(page);

    return (
      <div>
        {/* Here we are calling the renderPage method which will return a component  */}
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        {renderPage()}
        {/* We are passing the currentPage from state and the function to update it */}
      </div>
    );
  }
