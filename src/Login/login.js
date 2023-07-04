import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result && result.id) {
        setLoginMessage('Login Successful');
        navigate('/products'); // Redirect to the "/products" page
      } else {
        setLoginMessage('Login Failed (username or password not found). use this: [Username: atuny0, Password: 9uQFF1Lh ]');
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <Navbar></Navbar>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          placeholder="Enter Username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br/>
        <br/>
        <input
          placeholder="Enter Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <br/>
        <button type="submit">Login</button>
      </form>

      <p id="success">{loginMessage}</p>

      {/* <Footer></Footer> */}
    </div>
  );
}

export default Login;
