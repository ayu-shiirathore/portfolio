import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React, { useEffect, useState } from 'react';
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import Loader from 'react-loaders'


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animation')
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                <AnimatedLetters
                letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
                </h1>
                <p>
                Hey there! I'm Ayushi Rathore, currently a student at Thapar Institute of Engineering and Technology pursuing B.E. in Computer Engineering. Passionate about translating innovative ideas into captivating digital experiences, I'm on a journey to become a skilled software engineer, with a special focus on frontend web development.
          </p>
                
                <p>
                My journey in web development has led me to learn languages such as HTML, CSS, and JavaScript. In addition to my front-end expertise, I am proficient in languages like C, C++, Java, and Python, and have experience with frameworks such as ReactJs.Currently, I am expanding my skill set by diving into the field of data science, aiming to blend my front-end development skills with data-driven insights to create more intelligent and responsive applications.
                </p>
                <p>
                I am constantly seeking new challenges and opportunities to expand my knowledge and skills. If you're looking for a dedicated and innovative developer, I would love to connect and discuss how I can contribute to your projects.
                </p>
                <p>Feel free to explore my portfolio and connect with me on LinkedIn or GitHub. Let's create something amazing together!</p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                    <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About