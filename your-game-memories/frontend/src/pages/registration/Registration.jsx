import './registration.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormCard from "../../components/form-card/FormCard";
import axios from 'axios';

function Registration() {
  const headers = {
    'Content-Type': 'application/json',
    'X-Api-Key': import.meta.env.VITE_API_KEY_BACKEND
  }

  const [form, setForm] = useState({
    username: '',
    password: '',
    email: '',
    info: "test",
    authorities: [
      {
        "authority": "USER"
      }
    ]
  });

  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post('https://api.datavortex.nl/yourgamememories/users', { ...form }, { headers: headers });
      navigate('/login');
    } catch (ex) {
      setMessage(ex.response.data || 'Registration failed. Please try again');
      console.error(ex);
    }
  };

  return (
    <FormCard title='Registration' link='/login' linkName='Login' submitButtonText='Register' onSubmit={handleRegistration} submitDisabled={!form.username || !form.email || !form.password}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="Enter your username"
        name="username"
        value={form.username}
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />
      {message && (
        <p className='error-message'>
          {message}
        </p>
      )}
    </FormCard>
  );
}

export default Registration;