import './login.css'
import axios from 'axios';

function Login() {
  const headers = {
    'Content-Type': 'application/json',
    'X-Api-Key': import.meta.env.VITE_API_KEY_BACKEND
  }

  async function handleLogin(e) {
    e.preventDefault()
    const username = e.target.username.value
    const password = e.target.password.value

    try {
      const result = await axios.post('https://api.datavortex.nl/yourgamememories/users/authenticate', { username, password }, { headers: headers })
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className='login'>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
        <div className='login-buttons'>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}
  
export default Login