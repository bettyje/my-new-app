import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Signup.css' // Import the CSS file

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      await axios.post('https://journal-webb-app.onrender.com/user/sign-up', {
        name,
        email,
        password,
        age,
        gender,
      })
      navigate('/login')
    } catch (error) {
      setError('Signup failed. Please try again.')
      console.error('Signup failed:', error)
    }
  }

  return (
    <div className='signup-page'>
      <div className='signup-form'>
        <h2>Signup</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSignup}>
          <label>Name</label>
          <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <label>Age</label>
          <input
            type='number'
            placeholder='Age'
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <label>Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value=''>Select Gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
          </select>
          <button type='submit'>Signup</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
