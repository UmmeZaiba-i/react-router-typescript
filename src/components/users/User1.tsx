import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function User1() {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div>
      Hey! this is user1 <br />
      <p>Location state: {JSON.stringify(location.state)}</p>
      <button onClick={()=>navigate('/users')}>Go back</button>
    </div>
  )
}
