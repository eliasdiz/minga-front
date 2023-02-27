import { useRef } from 'react'
import './formindex.css'
import CampoRegistro from '../CampoRegistro/CampoRegistro'
import axios from 'axios'

export default function Formindex() {

    
    let name = useRef()
    let mail = useRef()
    let password = useRef()

    async function handleSubmit(e){
        e.preventDefault()
        let data = {
            [name.current.name]: name.current.value,
            [mail.current.name]: mail.current.value,
            [password.current.name]: password.current.value
        }
        console.log(data);
        let url = 'http://localhost:8000/users'
        try {
            await axios.post(url, data)
        } catch (error) {
            console.log('Ocurrio un Error');
        }
    }

    return (
            <form className='form-register' onSubmit={handleSubmit}>
                <CampoRegistro legend='Name' parentRef={name} type='text' id='name' required='true' name='name'>
                    <img className='icono' src='./images/profile.png' />
                </CampoRegistro>
                <CampoRegistro legend='Email' parentRef={mail} type='mail' id='mail' required='true' name='mail' >
                    <img className='icono' src='./images/@.png' />
                </CampoRegistro>
                <CampoRegistro legend='Password' parentRef={password} type='password' id='password' required='true' name='password' >
                    <img className='icono' src='./images/lock1.png' />
                </CampoRegistro>
                <CampoRegistro legend='Confirm password' type='password' id='Comfirmpassword' required='true' name='Comfirmpassword' >
                    <img className='icono' src='./images/lock1.png' />
                </CampoRegistro>
                <div className='div-checkbox'>
                    <input  type='checkbox'></input>
                    <p>Send notification to my email</p>
                </div>
                <input className='submit' type='submit' value='Sing up' />
                <div className='div-google'>
                    <img  src='./images/Google icono.png'  />
                    <p>Sing in with Google</p>
                </div>
                <p className='footer'>Already have an account? <a>Log in</a></p>
                <p className='footer'>Go back to <a>home page</a></p>
            </form>
    )
}
