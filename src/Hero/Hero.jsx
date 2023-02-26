import React from 'react'
import './hero.css'
import Header from '../components/Header/Header'
import Subhero from '../components/Subhero/Subhero'

export default function Hero() {
    return (
    <div className='hero'>
    <Header />
    <Subhero />
    </div>
    )
}
