import React from 'react'
import './styles.css'

import Notes from '../../components/Notes'
import Important from '../Important'

const Welcome = () => {
    return (
        <div className='welcome'>
            <p className='title'>Welcome</p>
            <hr />
            <p>The first step in applying for a U.S. nonimmigrant visa is to complete your application. It takes approximately 90 minutes to do this. After you submit your application, you can move on to the next steps such as scheduling your interview.</p>
            <Important />
            <Notes />
        </div>
    )
}

export default Welcome