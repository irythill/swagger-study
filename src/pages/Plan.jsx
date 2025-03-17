import { useState, useEffect } from 'react'
import api from '../services/api'
import Profile from './Profile'

const Plan = () => {
  const [userPlan, setUserPlan] = useState(null)

  useEffect(() => {
    const fetchUserPlan = async () => {
      try {
        const response = await api.get('/auth/plan')
        setUserPlan(response.data)
      } catch (error) {
        console.error('Failed to fetch user plan', error)
      }
    }
    fetchUserPlan()
  }, [])

  return (
    <div>
      <h1>Plano do Usuário</h1>
      {userPlan ? (
        <p>Status: {userPlan.status}</p>
      ) : (
        <p>Carregando plano...</p>
      )}
    </div>
  )
}

export default Plan