import React from 'react'
import './styles.css'

import imgfooter from '../../assets/imgfooter.gif'

const Footer = () => {
  return (
    <>
      <footer>
        <img src={imgfooter} alt="" />
        <p>This site is managed by the Bureau of Consular Affairs, U.S. Department of State. External links to other Internet sites should not be construed as an endorsement of the views contained therein.</p>
      </footer>
      <div className='created_by'>
        Created with ❤️ by <a href="https://www.linkedin.com/in/malvesgo/" target="_blank" rel="noreferrer">Marcelo Alves</a>
      </div>
    </>
  )
}

export default Footer