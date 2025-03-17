import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../services/api'
import Plan from './Plan'

const Profile = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get('/auth/profile')
        setUserData(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Failed to fetch user data', error)
        setLoading(false)
      }
    }
    fetchUserData()
  }, [navigate])

  if (loading) return  <p>Loading...</p>
 
  return (
    <div>
      <h1>Perfil do Usuário</h1>
      {userData ? (
        <div>
          <p>Nome: {userData.name}</p>
          <p>E-mail: {userData.email}</p>
          <p>Seu telefone: {userData.phone}</p>
          <p><Link to="/store">Informações da sua loja</Link></p>
          <p><Link to="/plan">Informações do seu plano</Link></p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}


export default Profile