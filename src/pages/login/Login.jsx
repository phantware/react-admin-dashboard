import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/apiCalls'
import '../login/login.scss'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault()
    login(dispatch, { username, password })
  }

  return (
    <div className='body'>
      <form className='register-form'>
        <input
          type='text'
          placeholder='username'
          onChange={(e) => setUsername(e.target.value)}
          className='buttonInput'
        />
        <input
          type='password'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
          className='buttonInput'
        />
        <button onClick={handleClick} className='btn'>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
