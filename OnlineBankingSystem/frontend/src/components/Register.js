import React, { useState } from 'react';
import apiClient from '../apiClient';

function Register() {
  const [form, setForm] = useState({ username: '', password: '', email: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiClient.post('/auth/register', form);
      setMessage(response.data);
    } catch (error) {
      setMessage('Error: Unable to connect to server');
    }
  };

  return (
    <div className="flex items-center justify-center mt-12">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="border p-2 mb-3 w-full"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2 mb-3 w-full"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 mb-3 w-full"
          value={form.email}
          onChange={handleChange}
          required
        />
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">
          Register
        </button>
        {message && <p className="mt-4 text-center text-blue-700">{message}</p>}
      </form>
    </div>
  );
}

export default Register;
