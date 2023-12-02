import React, { useState } from 'react';
import Image from '../imageio.png';
import '../stylesheet/main.css';
import { CiLocationArrow1 } from 'react-icons/ci';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Main() {
    const [youtubeLink, setYoutubeLink] = useState('');
    const [summarizedText, setSummarizedText] = useState('');
    let toastId;

    const handleSubmit = async () => {
        try {
            // Show processing notification and save the toastId
            toastId = toast.info('Processing PDF...', {
                position: 'bottom-right',
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });

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
            setSummarizedText(data.summarized_text.join('\n'));

            // Show success notification and update processing notification
            toast.update(toastId, {
                type: toast.TYPE.SUCCESS,
                render: 'PDF downloaded successfully!',
                autoClose: 3000,
            });
        } catch (error) {
            console.error('Error:', error);

            // Show error notification and update processing notification
            toast.update(toastId, {
                type: toast.TYPE.ERROR,
                render: 'Failed to download PDF!',
                autoClose: 3000,
            });
        }
    };

    return (
        <div className='mainbodybg'>
            <ToastContainer />
            <div className='lowerbox'>
                <div className='leftmainbox'>
                    <div className='imgbox'>
                        <img src={Image} className='orgimage' alt='Organization Logo' />
                    </div>
                </div>
                <div className='rightmainbox'>
                    <div className='wel'>WELCOME TO YOUTUBE CAPTION SUMMARIZER</div>
                    <div className='bio'>
                        Kindly Paste the YouTube link to generate the short summarizer.
                    </div>
                    <div className='maincontent'>
                        <label>
                            <CiLocationArrow1 className='icon pathloc1' />
                            <input
                                type='text'
                                placeholder='Paste the URL'
                                value={youtubeLink}
                                onChange={(e) => setYoutubeLink(e.target.value)}
                            />
                        </label>
                        <br />
                        <button onClick={handleSubmit}>Download PDF</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
