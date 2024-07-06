import React from 'react'
import {useNavigate, useLocation} from 'react-router-dom'

const About:React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goHome =()=>{
    navigate('/');
  }

  return (
    <div>
      <h4>About us</h4>
      <p>Current Path: {location.pathname}</p>
      <p>Search params: {location.search}</p>
      <button onClick={goHome}>Go Home</button>
    </div>
  )
}

export default About
