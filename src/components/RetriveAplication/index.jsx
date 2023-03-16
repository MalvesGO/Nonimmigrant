import React from 'react'
import './styles.css'

import { AiOutlineArrowRight } from 'react-icons/ai'

const RetriveAplication = () => {
  return (
    <div className='retriveApplication'>
      <p>You will be asked for your application ID and answer a security question.</p>
      <button>
        RETRIVE AN APPLICATION
        <AiOutlineArrowRight fontSize={24} />
      </button>
    </div>
  )
}

export default RetriveAplication