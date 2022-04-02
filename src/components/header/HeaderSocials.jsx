import React from 'react'
import {AiFillDribbbleCircle, AiFillTwitterCircle,AiFillGithub } from 'react-icons/ai'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://dribbble.com" target="_blank" rel='noreferrer'> <AiFillDribbbleCircle/> </a>
        <a href="https://github.com" target="_blank" rel='noreferrer'> <AiFillGithub/></a>
        <a href="https://twitter.com" target="_blank" rel='noreferrer'> <AiFillTwitterCircle/></a>
    </div>
  )
}

export default HeaderSocials