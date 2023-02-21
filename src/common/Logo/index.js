import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logo() {
    const navigate = useNavigate()
    return (
        <div className='Logo' onClick={() => navigate('/')}>
            Logo
        </div>
    )
}

export default Logo