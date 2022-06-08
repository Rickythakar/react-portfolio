import React from 'react'
import Navigation from './Navigation'

function Header({ handlePageChange }) {
    return (

        <header className='App-header'>
            <div className='navBar'>
            <Navigation handlePageChange={handlePageChange} />
            </div>
        </header>
    )
}
export default Header