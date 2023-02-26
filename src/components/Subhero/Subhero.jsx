import React from 'react'
import './subhero.css'

export default function Subhero() {
    return (
    <div className='subhero' >
        <div className='div-subhero'>
            <img className='image1' src='./images/image 1.png'/>
            <img className='image2' src='./images/image 2.png'/>
            <div className='div-texto'>
                <p className='texto1'>One Piece</p>
                <p className='texto2'>Manga</p>
                <p className='texto3'>Monkey D. Luffy refuses to let anyone stand in his way to become King of the Pirates.
                    He launches into the seas and will become a captain willing to never give up until he gets hold of the greatest 
                    treasure in history: the legendary One Piece.</p>
            </div>
        </div>
    </div>
    )
}
