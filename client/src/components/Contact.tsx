import { useEffect, useState } from 'react';
import { gsap, Expo } from 'gsap';
import axios from 'axios';
import Background from './Background';
import '../stylesheet/Contact.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';


interface GitHubInfo {
  public_repos: string;
  name: string;
  avatar_url: string;
  login: string;
  followers: number;
  following: number;
}

function About() {

  const [githubInfo, setGithubInfo] = useState<GitHubInfo | null>(null);

  useEffect(() => {
    const fetchGithubInfo = async () => {
      try {
        const response = await axios.get<GitHubInfo>('https://api.github.com/users/ryder-exe');
        setGithubInfo(response.data);
      } catch (error) {
        console.error('Error fetching GitHub information:', error);
      }
    };
    fetchGithubInfo();
  }, []);

  useEffect(() => {
    const showtext = () => {
      gsap.to('.innerbox', {
        duration: 1,
        opacity: 1,
        ease: Expo.easeInOut,
      });
      gsap.to('.image', {
        duration: 2,
        opacity: 1,
        ease: Expo.easeInOut,
      });
      gsap.to('.card', {
        duration: 2.5,
        opacity: 1,
        top:0,
        ease: Expo.easeInOut,
      });
    };
    showtext();

    return () => {};
  }, []);

  return (
    <>
      <div className='contactmain'>
        <div className='innerbox'>
            <div className='image'>{githubInfo && (<img src={githubInfo.avatar_url} alt="GitHub Avatar" className='logo'/>)}</div>
            <div className='lowertext'>
               {githubInfo && (<h5>{githubInfo.name}</h5>)}
               {githubInfo && (<h5>Github Account : {githubInfo.login}</h5>)}
               <h2>{githubInfo && (<Link to="https://github.com/ryder-exe" className='link'><FaGithub/></Link>)}</h2>
               <div className='cardholder'>
                    <div className='card'>{githubInfo && (<h5>Repositories : {githubInfo.public_repos}</h5>)}</div>
                    <div className='card'>{githubInfo && (<Link to="https://www.linkedin.com/in/faiz-khan101/" className='link'><FaLinkedin/></Link>)}</div>
               </div>
            </div>
        </div>
      </div>
      <Background />
    </>
  );
}

export default About;
