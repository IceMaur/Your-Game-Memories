import './login.css'
import React, { useState } from 'react';
import axios from 'axios';
import FormCard from '../../components/form-card/FormCard';

function Login() {
  const headers = {
    'Content-Type': 'application/json',
    'X-Api-Key': import.meta.env.VITE_API_KEY_BACKEND
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeUsername = (e) => setUsername(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const result = await axios.post('https://api.datavortex.nl/yourgamememories/users/authenticate', { username, password }, { headers: headers })
      console.log(result);
    } catch (ex) {
      console.error(ex)
    }
  }

  return (
    <FormCard title='Login' link='/register' linkName='Register' submitButtonText='Login' onSubmit={handleLogin} submitDisabled={!username || !password}>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" value={username} onChange={handleChangeUsername} required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={password} onChange={handleChangePassword} required />
      </form>
    </FormCard>
  )
}
  
export default Login