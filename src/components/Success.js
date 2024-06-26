import '../App.css'
import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';
import {motion as m } from 'framer-motion';
import Confetti from 'react-confetti'
import { useEffect, useState } from 'react';
export default function Success() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [pieces, setPieces] = useState(220);

    const stopConfetti = () => {
        setTimeout(() => {
            setPieces(0);
        }, 3000);
    };
    useEffect(() => {
        stopConfetti();
    }, []);

    useEffect(() => {
        function controlClick() {
          console.log('click event triggered');
        }
    
    // optionally set body height to full screen.
    document.body.style.Height = '100vh';
    document.body.style.overflowY = 'hidden'
    
      document.body.addEventListener('click', controlClick);
    
        return () => {
          //  remove event listener when the component unmounts
          document.body.style.overflowY = 'visible';
          document.body.removeEventListener('click', controlClick);
        };
      }, []);
    return(
        
        <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 1}} exit={{opacity: 0}} style={{overflowY: 'hidden'}} >
            <main className="flex justify-center contact-container flex-wrap align-center" style={{overflowY: 'hidden'}}>
                <div className='success-container'>
                    <h2 id='success-h2'>Thank you for your message <span className='red'>{searchParams.get('name')}.</span></h2>
                    <p id='success-p'>We have sent you an email to <span className='bold white'>{searchParams.get('email')}</span>. We will get back to you as soon as possible!</p>
                    <div className="success-submit-button-div">
                        <button className="submit" onClick={() => navigate(-1)}>Home page</button>
                    </div>
                </div>
            </main>
            <Confetti gravity={0.2} numberOfPieces={pieces} />
        </m.div>

    )
    
}