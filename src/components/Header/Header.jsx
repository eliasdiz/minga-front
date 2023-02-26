import React from 'react'
import './header.css'
import Navbar from '../Navbar/Navbar'

export default function Header() {
    return (
        <div className='header'>
            <Navbar />
            <div className='titulos'>
                <p className='titulo1'>For the love of manga</p>
                <p className='titulo2'>Explore our varieties</p>
                <p className='titulo3'>#MingaLove❤</p>
                <button className='button-header'>Let's go!</button>
            </div>
        </div>
    )
}
