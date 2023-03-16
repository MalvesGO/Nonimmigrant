import React from 'react'
import './styles.css'

import { FaQuestionCircle } from 'react-icons/fa'

const Apply = () => {
    return (
        <div className="apply">
            <h1>Apply For a Nonimmigrant Visa </h1>
            <button className='button'>
                <FaQuestionCircle style={{ marginRight: '0.5rem' }} />
                FAQs
            </button>
        </div>
    )
}

export default Apply