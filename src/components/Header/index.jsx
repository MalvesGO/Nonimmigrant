import React from 'react'
import './styles.css'

import Logo from '../../assets/logo_bg.png'

const Header = () => {
    return (
        <header>
            <div className="content">
                <div className='headerInfo'>
                    <img src='https://travel.state.gov/apps/tsg-rwd/components/content/resources/Department_of_state.svg' alt="logo" />
                    <div className='headerInfoText' >
                        <h1>U. S. DEPARTAMENT of STATE</h1>
                        <p>CONSULAR ELETRONIC APPLICATION CENTER</p>
                    </div>
                </div>
                <div className='right'>
                    <span>Select Tooltip Language</span>
                    <select>
                        <option>English</option>
                        <option>Portuguese</option>
                    </select>
                </div>
            </div>
        </header>
    )
}

export default Header