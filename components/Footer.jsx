import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'



const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 KYC All Rights Reserved</p>
      <p className='icons'>
        <a href='https//www.instagram.com'><AiFillInstagram/></a>
        <a href='https//www.instagram.com'><AiOutlineTwitter/></a>
        
      </p>
    </div>
  )
}

export default Footer