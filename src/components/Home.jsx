import React, { Fragment, useState } from 'react'
import './CSS/Home.css'
import { BsFillCircleFill} from "react-icons/bs";
import { AiOutlinePlayCircle } from "react-icons/ai";
import Signup from './Signup';

function Home() {
    const [show,setShow]=useState(false)
    const handleShow=()=>{
        setShow(!show)
    }
  return (
    <Fragment>
        <div className='header'>
            <div className='icon'>
                <span className='exp'>Expertia</span>
            </div>
            <div className='header-right'>
                <span className='texts'>Solutions &nbsp; </span>
                <span className='texts'>About Us</span>
                <span className='texts'>Contact Us</span>
                <span className='texts text2' onClick={handleShow}>Signup</span>
            </div>
        </div>
        <div className='middle'>
            <div className='find'>
                <div className='best-candidates'>Let's Find that <br/>Best Candidate...</div>
                <br />
                <div className='best-candidates1'>
                <div >Source,screen,rank,candidates</div>
                <div >from multiple job boards,internal and external databases</div>
                <button className='best-candidates2'>Get Started</button>
                </div>
            </div>
        </div>
        {
            show&& <Signup handleShow={handleShow}/>
        }
    </Fragment>
  )
}

export default Home