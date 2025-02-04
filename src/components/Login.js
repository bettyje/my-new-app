import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './LoginPage.css' 

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('https://journal-webb-app.onrender.com/login', {
        email,
        password,
      })

      const { access_token, user } = response.data

      if (access_token && user) {
        setUser(user)
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('access_token', access_token)
        navigate('/journal')
      } else {
        setError('Invalid response from server')
      }
    } catch (error) {
      setError('Invalid email or password')
      console.error('Login failed:', error)
    }
  }

  return (
    <div className='login-page'>
      <div className='login-form'>
        <h2>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
