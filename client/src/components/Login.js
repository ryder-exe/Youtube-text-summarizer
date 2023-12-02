import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../imageio.png';
import '../stylesheet/main.css';
import { CiUser, CiLock } from 'react-icons/ci';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
      navigate('/main');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className='mainbodybg'>
      <div className='lowerbox'>
        <div className='leftmainbox'>
          <div className='imgbox'>
            <img src={Image} className='orgimage' alt='Organization Logo'></img>
          </div>
        </div>
        <div className='rightmainbox'>
          <div className='wel'>WELCOME TO YOUTUBE CAPTION SUMMARIZER</div>
          <div className='bio2'>LOGIN</div>
          <div className='maincontent'>
            <CiUser className='icon pathloc1' />
            <input id="username" type="text" placeholder='Username' />
            <br />
            <CiLock className='icon pathloc1' />
            <input id="password" type="password" placeholder='Password' />
            <br />
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
