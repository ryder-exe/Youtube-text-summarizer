import React from 'react';
import Image from './imageio.png';
import './stylesheet/main.css';
import { BrowserRouter, Link } from 'react-router-dom';
import { CiLocationArrow1 } from "react-icons/ci";

function App() {
  return (
    <div className='mainbodybg'>
      <div className='lowerbox'>
        <div className='leftmainbox'>
          <div className='imgbox'>
            <img src={Image} className='orgimage' alt="Organization Logo" />
          </div>
        </div>
        <div className='rightmainbox'>
          <div className='wel'>WELCOME TO YOUTUBE CAPTION SUMMARIZER</div>
          <div className='bio'>Kindly Paste the YouTube link to generate the short summarizer.</div>
          <div className='maincontent'>
            <label>
            <CiLocationArrow1 className='icon pathloc1'/>
              <input
                type="text"
                placeholder='Paste the URL'
              />
            </label><br />
            <Link to="/Login">
              <button>Download PDF</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
