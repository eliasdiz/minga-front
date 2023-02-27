import React from 'react'
import './camporegistro.css'


export default function CampoRegistro(props) {
    return (
        <fieldset className='campo-registro'>
            <legend>{props.legend}</legend>
            <input ref={props.parentRef} type={props.type} id={props.id} required={props.required} name={props.name}>{props.text}</input>
            {props.children}
        </fieldset>
    )
}
