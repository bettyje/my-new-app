import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('access_token')
    setUser(null)
    navigate('/login')
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary px-3'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>
          MyApp
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                Home
              </Link>
            </li>
            {user && (
              <li className='nav-item'>
                <Link to='/journal' className='nav-link'>
                  Journal
                </Link>
              </li>
            )}
            {!user && (
              <>
                <li className='nav-item'>
                  <Link to='/login' className='nav-link'>
                    Login
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/signup' className='nav-link'>
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'>
                About
              </Link>
            </li>
            {user && (
              <>
                <li className='nav-item'>
                  <span className='nav-link'>Welcome, {user.name}</span>
                </li>
                <li className='nav-item'>
                  <button
                    className='btn btn-outline-light'
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
