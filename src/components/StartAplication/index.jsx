import React from 'react'
import './styles.css'

import { AiOutlineArrowRight } from 'react-icons/ai'

const StartAplication = () => {
  return (
    <div className='startAplication'>
      <p>Select a location and make sure you have the documents and information you will need.</p>
      <button>
        START AN APPLICATION
        <AiOutlineArrowRight fontSize={24} />
      </button>
    </div>
  )
}

export default StartAplication