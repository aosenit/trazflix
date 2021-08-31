import { useRef } from 'react'
import { auth } from '../firebase'



function RegisterScreen({setRegister}) {
    
    const emailRef = useRef()
    const passwordRef = useRef()

    const registered = (e) => {
        e.preventDefault()
        auth
        .createUserWithEmailAndPassword(
            emailRef.current.value, 
            passwordRef.current.value
        )
        .catch((error) => {
            alert(error.message)
        })
    }



    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign Up</h1>
                <input 
                    ref={emailRef} 
                    type="email" 
                    placeholder='Email' 
                    className="signup__input" 
                    required
                />
                <input 
                    ref={passwordRef} 
                    type="password" 
                    placeholder='Password' 
                    className="signup__input" 
                    required
                    
                />
                <button type='submit' onClick={registered}>Sign up</button>
                <h4>
                    <span className="signupScreen__gray">New to Netflix ? </span> 
                    <span className='signupScreen__link' onClick={() => setRegister(false) }>Sign In now</span>
                </h4>
            </form>
        </div>
    )
}

export default RegisterScreen
