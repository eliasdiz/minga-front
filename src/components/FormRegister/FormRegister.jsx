import React from 'react'
import './formregister.css'
import Formindex from '../Formindex/Formindex'

export default function FormRegister() {
    return (
        <div className='contenedor-registro'>
            <div className='div-titulo'>
                <img src='./images/Logo Dos.png'/>
                <p className='p1'>Welcome!</p>
                <p className='p2'>Discover manga, manhua and manhwa, track your progress, have fun, read manda.</p>
            </div>
            < Formindex />
        </div>
    )
}
