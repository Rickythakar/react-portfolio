import React from 'react'
import Navigation from './Navigation'

function Header({ handlePageChange }) {
    return (

        <header className='App-header'>
            <Navigation handlePageChange={handlePageChange} />
        </header>
    )
}
export default Header