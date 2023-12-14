import { useEffect, useState } from 'react';
import './stylesheet/App.css';
import { gsap, CSSPlugin, Expo } from 'gsap';
import Background from './components/Background';
import Navbar from './components/Navbar';
import TextContent from './/components/Textcontent'
import image from './squares.png';
gsap.registerPlugin(CSSPlugin);

function App() {
  const [counter, setCounter] = useState(0);
  const [loadingVisible, setLoadingVisible] = useState(true);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((prevCounter) => {
        const newCounter = prevCounter < 100 ? prevCounter + 1 : 100;
        if (newCounter === 100) {
          clearInterval(count);
          reveal();
        }
        return newCounter;
      });
    }, 25);
    return () => clearInterval(count);
  }, []);

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log('Completed');
        setLoadingVisible(false);
        showNavbar();
      },
    });
    t1.to('.loadingtext', {
      duration: 0.8, 
      opacity: 0,
      ease: Expo.easeInOut,
    });
  };

  const showNavbar = () => {
    gsap.to('.Navbarcontent', {
      duration: 0.8,
      top: '0',
      ease: Expo.easeInOut,
    });
  };

  return (
    <div className='loadingmain'>
      {counter < 100 ? (
        <>
          <div className='loadingimg'><img src={image}/></div>
        </>
      ) : null}
      {!loadingVisible ? (
        <>
          <Navbar />
          <TextContent/>
          <Background />
        </>
      ) : null}
    </div>
  );
}

export default App;
