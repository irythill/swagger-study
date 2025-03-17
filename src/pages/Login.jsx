import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await api.post('/auth/login', {
        email,
        password
      })
      setToken(response.data.token) // JWT save
      sessionStorage.setItem("token", response.data.token) // Token saved while browser session
      console.log(`JWT token ${token}`) // See token thru console
      alert('Success to login!')
      navigate('/profile') // Redirect to Profile.jsx
    } catch (error) {
      console.error('Failed to login', error)
      alert('Failed to login!')
    }
  }
  
  return (
    <div>
      <h1>Login page TEST STUDY</h1>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login