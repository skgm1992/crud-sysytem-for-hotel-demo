import React from 'react'

const Header = () => {
    return (
        <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
             <div className='container'>
                    <a href='' className='navbar-brand'>My Hotel.com</a>
                     </div>
                     <button data-bs-toggle="collapse" data-bs-target="#box" className='navbar-toggler'>
                        <span className='navbar-toggler-icon'></span>
                     </button>
                     <div className='collapse navbar-collapse' id="box">
                        <ul className='nav navbar-nav'>
                            <li className='nav-item'>
                                <a className='nav-link' href="/">Hotel</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href="/about">About</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href="/contact">Contact</a>
                            </li>

                        </ul>
                     </div>
            
                </nav>
        </>
    )
}

export default Header