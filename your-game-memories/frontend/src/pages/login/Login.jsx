import './login.css'
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FormCard from '../../components/form-card/FormCard';
import { TempContext, UsernameContext } from '../../context/TempContext';

function Login() {
  const navigate = useNavigate();
  const { setUserJwtToken } = useContext(TempContext);
  const { setUsername  } = useContext(UsernameContext);

  const headers = {
    'Content-Type': 'application/json',
    'X-Api-Key': import.meta.env.VITE_API_KEY_BACKEND
  }

  const [username, setUsernameInput] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeUsername = (e) => setUsernameInput(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const [message, setMessage] = useState('');

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const result = await axios.post('https://api.datavortex.nl/yourgamememories/users/authenticate', { username, password }, { headers: headers });
      setUsername(username);
      setUserJwtToken(result.data.jwt);
      navigate('/');
    } catch (ex) {
      setMessage(ex.response.data || 'Login failed. Please try again');
      console.error(ex)
    }
  }

  return (
    <FormCard title='Login' link='/registration' linkName='Register' submitButtonText='Login' onSubmit={handleLogin} submitDisabled={!username || !password}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" value={username} onChange={handleChangeUsername} required />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" value={password} onChange={handleChangePassword} required />
      {message && (
        <p className='error-message'>
          {message}
        </p>
      )}
    </FormCard>
  )
}
  
export default Login