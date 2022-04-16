import React, { Fragment, useState } from 'react'
import { MdClear } from "react-icons/md";
import './CSS/Signup.css'
import Login from './Login';

function Signup({handleShow}) {
    const [login,setLogin]=useState(false)
    const handleLogin=()=>{
        setLogin(!login)
    }
  return (
    <Fragment>
        {
            login&& <Login handleLogin={handleLogin}/>
        }

        {
            !login &&<div className='card'>
            <div className='close'><MdClear onClick={handleShow}/></div>
            <div className='great'>Great!</div>
            <br />
            <div className='look'>
                <div>What are</div>
                <div>you looking for?</div>
            </div>
            <div className='button'>
                <button className='button1'>To Hire</button>
                <br />
                <button className='button1 button2'>To Apply</button>
                <div className='click' onClick={handleLogin}>I already have an account</div>
            </div>
        </div>
        }
    </Fragment>
  )
}

export default Signup