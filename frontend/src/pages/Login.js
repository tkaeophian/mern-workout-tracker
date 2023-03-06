import { useLogin } from '../hooks/useLogin'
import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading } = useLogin()
    const handleSubmit = async(e) => {
        e.preventDefault()

        await login(email, password)
    }
    
    return (
        <form className='login' onSubmit={handleSubmit}>
            <h4>Login</h4>
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

            <button disabled={isLoading}>Login</button>
            {error && <div className='error'>{ error }</div>}
        </form>
    )
}

export default Login