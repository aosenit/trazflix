import { useRef } from 'react'
import { auth } from '../firebase'
import './Signupscreen.css'

function SignupScreen({setRegister}) {
    const emailRef = useRef()
    const passwordRef = useRef()


    const signIn = (e) => {
        e.preventDefault()
        auth
        .signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .catch((error) =>{
            alert(error.message)
        })
        
    }

    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
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
                <button type='submit' onClick={signIn}>Sign in</button>
                <h4>
                    <span className="signupScreen__gray">New to Netflix ? </span> 
                    <span className='signupScreen__link' onClick={() => setRegister(true)}>Sign up now</span>
                </h4>
            </form>
        </div>
    )
}

export default SignupScreen
