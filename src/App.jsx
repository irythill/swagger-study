import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Plan from './pages/Plan'
import Store from './pages/Store'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/plan" element={<Plan />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
