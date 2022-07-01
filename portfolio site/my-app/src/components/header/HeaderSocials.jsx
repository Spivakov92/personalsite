import React from 'react'
import {BsLinkedin , BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/arsen-spivakov-38b17323b/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/Spivakov92/personalsite" target='_blank'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials