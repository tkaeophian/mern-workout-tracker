import { useState } from 'react'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async(e) => {
        e.preventDefault()

        console.log(email, password)
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

            <button>Login</button>
        </form>
    )
}

export default Login