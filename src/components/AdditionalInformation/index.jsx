import React from 'react'
import './styles.css'

import { BiArrowFromLeft } from 'react-icons/bi'

const AdditionalInformation = () => {
    return (
        <div className='additionalInformation'>
            <p className='title'>Additional Information</p>
            <hr />
            <ul className='additionalList'>
                <li>
                    <BiArrowFromLeft
                        className='icon'
                        fontSize={'1rem'}
                        style={{ marginRight: '0.5rem' }}
                    />
                    <p>
                        <strong>Write down the Application ID </strong>
                        displayed on the top right hand corner of the page. If you close your browser window, you will need your ID to access your application again.
                    </p>
                </li>
                <li>
                    <BiArrowFromLeft
                        className='icon'
                        fontSize={'1rem'}
                        style={{ marginRight: '0.5rem' }}
                    />
                    <p>
                        <strong>Save your application frequently. </strong>
                        The system will time out after 20 minutes of inactivity, and you will lose all unsaved information.
                    </p>
                </li>
                <li>
                    <BiArrowFromLeft
                        className='icon'
                        fontSize={'1rem'}
                        style={{ marginRight: '0.5rem' }}
                    />
                    <p>
                        Read more about U.S. visas at <a href="#">travel.state.gov</a>
                    </p>
                </li>
                <li>
                    <BiArrowFromLeft
                        className='icon'
                        fontSize={'1rem'}
                        style={{ marginRight: '0.5rem' }}
                    />
                    <p>
                        Visit the website of the <a href="#">
                            U.S. Embassy of Consulate
                        </a>
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default AdditionalInformation