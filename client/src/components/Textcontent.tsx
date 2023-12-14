import '../stylesheet/Textcontent.css';
import { useEffect, useState } from 'react';
import { gsap, Expo } from 'gsap';
import '../stylesheet/Navbar.css';
import { FaGithub, FaFileDownload , FaCopy } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function TextContent() {
  const [youtubeLink, setYoutubeLink] = useState('');
  const [joinedText,setJoinedText] = useState('');
  const [generateClicked, setGenerateClicked] = useState(false);

  const handleDownloadClick = () => {
    const blob = new Blob([joinedText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'caption.txt';
    link.click();

    // Clean up
    URL.revokeObjectURL(link.href);
    toast.success('Downloaded!');
  };

  const handleCopyClick = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(joinedText)
        .then(() => {
          toast.success('Copied!');
        })
        .catch((error) => {
          console.error('Unable to copy text to clipboard:', error);
          toast.error('Error copying text!');
        });
    } else {
      console.warn('Clipboard API not supported in this browser.');
    }
  };

  const handleSubmit = async () => {
    try {
      setGenerateClicked(true);
      toast.info('Processing...');
      
      const response = await fetch('http://127.0.0.1:5000/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ytlink: youtubeLink }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      var joinedText = data.summarized_text.join('\n');
      console.log("Textcontent: ", joinedText);
      setJoinedText(joinedText);
      toast.success('Processed successfully!');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error processing!');
    }

    useEffect(()=>{
      const showmenu =() =>{
        gsap.to('.showing',{
          duration: 3,
          opacity: 1,
          ease: Expo.easeInOut,
        })
      };
      showmenu();
      return () => {};
    },[])
  };

  useEffect(() => {
    const showtext = () => {
      gsap.to('.text1', {
        duration: 1.5,
        opacity: 1,
        ease: Expo.easeInOut,
      });
      gsap.to('.text2', {
        duration: 1.5,
        opacity: 1,
        ease: Expo.easeInOut,
      });
      gsap.to('.line', {
        duration: 1.5,
        width: '10%',
        paddingRight: '90%',
        ease: Expo.easeInOut,
      });
      gsap.to('.box2', {
        duration: 2.5,
        opacity: 1,
        ease: Expo.easeInOut,
      });
    };
    showtext();

    return () => {};
  }, []);

  return (
    <>
      <div className="textmain">
        <div className={`${generateClicked ? 'hide' : 'box1'}`}>
          <div className="">
            <h1 className="text1">Unleash YouTube's Voice</h1>
            <div className="line"></div>
            <h1 className="text2">Caption Reader 23</h1>
            <Link to="https://github.com/ryder-exe" className="followgit">
              <FaGithub className="icons" />
              Follow my github for more information.
            </Link>
          </div>
        </div>
        <div className={`${generateClicked ? 'showing' : 'hide'}`}>
        <div className='showingtextheader'>
          <button className='btn' onClick={handleDownloadClick}><FaFileDownload/></button>
          <button className='btn' onClick={handleCopyClick}><FaCopy/></button>
        </div>
        <div className='showingtext'>
          <textarea readOnly placeholder='Only Summerized text will be show here' value={joinedText}></textarea>
        </div>
      </div>
        <div className="box2">
          <div className="box2-innerbox">
            <h1 className="boxinner-text">GENERATE YOUR YOUTUBE VIDEO CAPTION</h1>
            <h6 className="boxinner-text2">
              Kindly Paste the Youtube URL in order to generate the caption
            </h6>
            <div className="box2inner-holder">
              <input
                type="text"
                placeholder="Paste the URL"
                value={youtubeLink}
                onChange={(e) => setYoutubeLink(e.target.value)}
              />
              <br />
              <div className="buttonholder">
                  <button onClick={handleSubmit}>Generate</button>
              </div>
            </div>
          </div>
        </div>
      <ToastContainer
      className="hol"
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark" />
      </div>
    </>
  );
}

export default TextContent;
