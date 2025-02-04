import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import AboutPage from './components/AboutPage'
import Signup from './components/Signup'
import Journal from './components/Journal'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import './App.css'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser)
        if (parsedUser && typeof parsedUser === 'object') {
          setUser(parsedUser)
        } else {
          console.error('Invalid user data in localStorage')
          localStorage.removeItem('user')
        }
      }
    } catch (error) {
      console.error('Failed to parse user data:', error)
      localStorage.removeItem('user')
    }
  }, [])

  return (
    <div className='App'>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/login'
          element={
            user ? <Navigate to='/journal' /> : <Login setUser={setUser} />
          }
        />
        <Route path='/about' element={<AboutPage />} />
        <Route
          path='/signup'
          element={user ? <Navigate to='/journal' /> : <Signup />}
        />
        <Route
          path='/journal'
          element={user ? <Journal user={user} /> : <Navigate to='/login' />}
        />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  )
}

export default App
