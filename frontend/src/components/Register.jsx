import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const Register = () => {

	const nav = useNavigate();

	if(cookies.get('token')) {
		nav('/search');
	}

	const [usernameInput, setUsernameInput] = useState('');
	const [passwordInput, setPasswordInput] = useState('');

	const handleRegisterSubmit = async (e) => { 
		e.preventDefault();
		const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/register`, {
			username: usernameInput,
			password: passwordInput
		});
		window.location.href = '/login';
	};

	return (
		<div>
		<h1>Login</h1>
		<form>
				<label htmlFor='username'>Username</label>
				<input type='text' name='username' id='username' onChange={(e) => setUsernameInput(e.target.value) }/>
				<label htmlFor='password'>Password</label>
				<input type='password' name='password' id='password' onChange={(e) => setPasswordInput(e.target.value) }/>
				<button type='submit' onClick={handleRegisterSubmit}>Register</button>		
		</form>
	</div>
	)
};

export default Register;