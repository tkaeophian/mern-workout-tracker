import { useSignup } from "../hooks/useSignup"
import { useState } from 'react'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async(e) => {
        e.preventDefault()

        await signup(email, password)
    }
    
    return (
        <form className='signup' onSubmit={handleSubmit}>
            <h4>Sign up</h4>
            <label>Email address:</label>
            <input 
                type="email" 
                onChange={(e) => setEmail(e.target.value)} 
                value={email} 
                required
            />
            <label>Password:</label>
            <input 
                type="password" 
                onChange={(e) => setPassword(e.target.value)} 
                value={password} 
                required
            />

            <button disabled={isLoading}>Sign up</button>
            {error && <div className='error'>{ error }</div>}
        </form>
    )
}

export default Signup