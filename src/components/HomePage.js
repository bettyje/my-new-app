import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

const HomePage = ({ user, setUser }) => {
  return (
    <div>
      <section className='hero-section'>
        <div className='container'>
          <p className='lead hero-text'>
            Your personal space to write, reflect, and grow.
          </p>
          <Link to='/signup' className='btn btn-light btn-lg get-started-btn'>
            Get Started
          </Link>
        </div>
      </section>

      <section className='py-5 features-section'>
        <div className='container'>
          <h2 className='text-center mb-5 feature-title'>
            Why Choose My Journal?
          </h2>
          <div className='row'>
            <div className='col-md-4 mb-4'>
              <div className='card h-100 shadow'>
                <div className='card-body'>
                  <h5 className='card-title'>Write Journals</h5>
                  <p className='card-text'>
                    Express your thoughts and feelings in a safe space.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mb-4'>
              <div className='card h-100 shadow'>
                <div className='card-body'>
                  <h5 className='card-title'>Track Progress</h5>
                  <p className='card-text'>
                    See how far you've come with your journaling journey.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mb-4'>
              <div className='card h-100 shadow'>
                <div className='card-body'>
                  <h5 className='card-title'>Stay Organized</h5>
                  <p className='card-text'>
                    Categorize and search your entries easily.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='footer'>
        <div className='container'>
          <p className='mb-0'>&copy; 2025 My Journal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
