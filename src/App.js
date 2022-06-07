// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import PortfolioContainer from './components/PortfolioContainer';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';


function App() {
  // Move state to here
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
    <div className="App">
      <Header handlePageChange={handlePageChange} />
      <PortfolioContainer
        renderPage={renderPage} />
      <Footer/>
    </div>
  );
}


export default App;
