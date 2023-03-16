import React from 'react'
import './styles.css'

const Important = () => {
    return (
        <div className='important'>
            <p className='title'>Important: Before You Start</p>
            <hr />
            <ul>
                <li>
                    <p>1 - Learn about <a href="#">Types of Visas.</a></p>
                </li>
                <li>
                    <p>2 - This website is designed to be accessed using Chrome, Edge, or Firefox only.</p>
                </li>
                <li>
                    <p>3 - <a href="#">Gather of documents.</a></p>
                </li>
                <li>
                    <p>4 - Review the <a href="#">instructions</a> and <a href="#">FAQ</a></p>
                </li>
            </ul>
        </div>
    )
}

export default Important