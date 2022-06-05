import React from 'react';


export default function PortfolioContainer({renderPage}) {
    return (
      <div>
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
        {/* We are passing the currentPage from state and the function to update it */}
      </div>
    );
  }
