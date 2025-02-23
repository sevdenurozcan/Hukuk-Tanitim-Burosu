import React from 'react'
import { FaPhone } from "react-icons/fa";
import '../css/Footer.css'
import { IoIosMail } from "react-icons/io";


function Footer() {
  return (
    <div>
      <div className='ulasim'>
        <div className='icon-tel'>
          <FaPhone />  +90 555 555 55 55
        </div>
        <div className='icon-mail'>
          <IoIosMail />  ornek@gmail.com
        </div>

      </div>
    </div>
  )
}

export default Footer