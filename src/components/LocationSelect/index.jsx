import React from 'react'
import './styles.css'

import { BiWorld } from 'react-icons/bi'

const LocationSelect = () => {
    return (
        <div className='location'>
            <p>Select a location where you will be applying for this visa</p>
            <div className='locationSelect'>
                <BiWorld fontSize={'2rem'} style={{ marginRight: '0.5rem' }} />
                <select name="location" id="location">
                    <option value="usa">Brazil</option>
                    <option value="br">Portugal</option>
                </select>
            </div>

        </div>
    )
}

export default LocationSelect