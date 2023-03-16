import React from 'react'
import './styles.css'

import StartAplication from '../../components/StartAplication'
import RetriveAplication from '../../components/RetriveAplication'
import AdditionalInformation from '../../components/AdditionalInformation'
import LocationSelect from '../../components/LocationSelect'

const GetStarted = () => {
    return (
        <div className='getStarted'>
            <p className='title'>Get Started</p>
            <hr />
            <LocationSelect />
            <StartAplication />
            <RetriveAplication />
            <AdditionalInformation />
        </div>
    )
}

export default GetStarted