import React from 'react'
import './footer.scss'
import {BsLinkedin , BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
       <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/arsen-spivakov-38b17323b/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/Spivakov92/personalsite" target='_blank'><BsGithub/></a>
    </div>
    </footer>
  )
}

export default Footer