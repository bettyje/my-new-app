import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './App.css' 

const CalendarView = ({ user }) => {
  const [entries, setEntries] = useState([])
  const [date, setDate] = useState(new Date())
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (user?.access_token) {
      fetchEntries()
    }
  }, [user])

  const fetchEntries = async () => {
    setLoading(true)
    try {
      const response = await axios.get(
        'https://journal-webb-app.onrender.com/calendar',
        {
          headers: { Authorization: `Bearer ${user.access_token}` },
        }
      )
      setEntries(response.data)
    } catch (error) {
      console.error('Failed to fetch calendar entries:', error)
      alert('Failed to load calendar entries. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  const tileContent = ({ date }) => {
    const formattedDate = date.toISOString().split('T')[0]
    const hasEntry = entries.some((entry) => entry.date === formattedDate)
    return hasEntry ? <div className='dot'></div> : null
  }

  return (
    <div>
      <h1>Calendar</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Calendar onChange={setDate} value={date} tileContent={tileContent} />
      )}
    </div>
  )
}

export default CalendarView
