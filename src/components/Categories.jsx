import React from 'react'
import '../assets/styles/components/Categories.scss'

function Categories({ children }) {
    return (
        <div className='categories'>
            <h3 className='categories__title'>Mi lista</h3>
            {children}
        </div>
    )
}

export default Categories