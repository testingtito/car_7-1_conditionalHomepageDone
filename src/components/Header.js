import React from 'react'
import { Link } from 'react-router-dom';
import HeaderLoggedOut from './HeaderLoggedOut';

const Header = () => {
  return (
    <div>
      <header className="header-bar bg-primary mb-3">
        <div className="container d-flex flex-column flex-md-row align-items-center p-3">
          <h4 className="my-0 mr-md-auto font-weight-normal">
            <Link to="/" className="text-white">
              ComplexApp
            </Link>
          </h4>
          <HeaderLoggedOut />
        </div>
      </header>
    </div>
  )
}

export default Header
