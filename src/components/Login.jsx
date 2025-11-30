import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Login = () => {
    let {user} = useParams();

    let navigate = useNavigate();
   function handleNavigate(){
    navigate("/");
   }

  return (
    <div>Login - {user}
    <br />
    <button onClick={ handleNavigate }> Go to home </button>
    </div>
  )
}

export default Login