import React, { Fragment } from 'react'
import { MdClear } from "react-icons/md";
import './CSS/Login.css'

function Login({handleShow,handleLogin}) {
  return (
    <Fragment>
        <div className='card'>
        <div className='clear'><MdClear onClick={handleLogin}/></div>
        <h2>Welcome!</h2>
            <form className='btn'>
                <input type="text" placeholder='Username' className='form' />
                <br />
                <br />
                <input type="password" placeholder='Password'className='form' />
                <button type='submit' className='form-button'>Login</button>
            </form>
        </div>
    </Fragment>
  )
}

export default Login