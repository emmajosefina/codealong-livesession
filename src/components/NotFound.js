import React from "react"
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate= useNavigate()
    const onHomeButtonClick = () => {
        navigate('/')
    }

    return (
        <div>
            <p>
                Sorry Pokemon Master, this page doesn't exist
                <button onClick={onHomeButtonClick}>Return to Home Page</button>
            </p>

        </div>

    )

}

export default NotFound