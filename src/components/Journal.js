import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import './JournalPage.css'

const Journal = ({ user }) => {
  const [entries, setEntries] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState('')

  const fetchEntries = useCallback(async () => {
    if (!user?.access_token) return

    try {
      const response = await axios.get('http://localhost:5000/journal', {
        headers: { Authorization: `Bearer ${user.access_token}` },
      })
      setEntries(response.data)
    } catch (error) {
      console.error('Failed to fetch entries:', error)
      setError('Failed to fetch journal entries.')
    }
  }, [user?.access_token])

  useEffect(() => {
    fetchEntries()
  }, [fetchEntries])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title.trim() || !content.trim()) {
      setError('Title and content are required.')
      return
    }

    try {
      const payload = { title: title.trim(), content: content.trim() }
      const response = await axios.post(
        'http://localhost:5000/journal',
        payload,
        {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            'Content-Type': 'application/json',
          },
        }
      )

      if (response.status === 201) {
        fetchEntries()
        setTitle('')
        setContent('')
        setError('')
      }
    } catch (error) {
      console.error('Failed to create entry:', error)
      setError('Failed to create journal entry. Please try again.')
    }
  }

  return (
    <div className='journal-page'>
      <div className='journal-content'>
        <h1>My Journal</h1>
        {error && <p className='error-text'>{error}</p>}
        <form className='journal-form' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder='Content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button type='submit'>Add Entry</button>
        </form>
        <div className='journal-entries'>
          {entries.map((entry) => (
            <div className='journal-entry' key={entry.id}>
              <h2>{entry.title}</h2>
              <p>{entry.content}</p>
              <p>
                <small>
                  Created at: {new Date(entry.created_at).toLocaleString()}
                </small>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Journal
