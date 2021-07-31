import React from 'react'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#hero"><img src={require('../../assets/img/navbar-logo.png').default} alt="Logo." /></a>
                <div className="" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
                        <li class="nav-item"><a class="btn btn-primary nav-link text-uppercase" href="#services">Sign In</a></li>
                        <li class="nav-item"><a class="btn btn-primary nav-link text-uppercase" href="#services">Sign Up</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Header
