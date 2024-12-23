import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import LogoTitle from  '../../assets/images/logo-s.png';
import Logo from './Logo';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders'


const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animation')

    const nameArray = ['y', 'u' , 's', 'h' ,'i']
    const jobArray = ['S','o','f','t','w','a','r','e',' ','D','e','v','e','l','o','p','e','r','.']
 
    // useEffect(() => {
    //     return setTimeout(() => {
    //       setLetterClass('text-animate-hover')
    //     }, 4000)
    //   }, [])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 1000);

        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    }, []);


    return(
        <>

        <div className="container home-page">
            <div className="text-zone">
                <h1>
                 <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass ={letterClass}  strArray={nameArray} idx={15} />
                <br />
                <AnimatedLetters letterClass ={letterClass}  strArray={jobArray} idx={22} />
                </h1>
                <h2>Web Develoment / Frontend Developer / DataScience</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                {/* <Link to="/resume" className='flat-button'>RESUME</Link> */}
                <a href="https://drive.google.com/file/d/1X-hUyxIFwD-lXjSKufisJ30dYCTmBfpF/view?usp=sharing" className='flat-button' target="_blank" rel="noopener noreferrer">RESUME</a>
            </div>
            <Logo />
        </div>

        <Loader type="pacman" />

        </>
        

    );



}

export default Home