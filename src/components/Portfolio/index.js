import React, { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loaders';

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animation');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            <div className='container portfolio-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
                            idx={15}
                        />
                    </h1>

                    {/* <section className='skills-section'>
                        <h2>Skills</h2>
                        <p>
                            Here are some of the technologies and tools I work with:
                        </p>
                        <div className='skills-list'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                           
                        </div>
                    </section> */}

                    <section className='projects-section'>
                        <h2>Projects</h2>
                        <p>
                            Below are some of the projects I've worked on:
                        </p>
                        <div className='projects-list'>
                            <div className='project-item'>
                                <h3>Ease-Travel :</h3>
                                <p>
                                Ease-Travel is a comprehensive web application designed to enhance the travel planning experience.
The application leverages various APIs and modern web technologies to provide users with real-time
information about travel destinations, including maps, points of interest, and essential travel details.
The Ease-Travel project was developed using React and Material-UI for the frontend, integrated with Google
Maps API and Axios for real-time data fetching.
                                </p>
                            </div>
                            <div className='project-item'>
                                <h3>Online Flight Booking System :</h3>
                                <p>
                                Developed a front-end clone of a typical flight ticket booking website using HTML, CSS, and JavaScript. This project enhanced my skills in front-end web development, providing a user-friendly interface for browsing and selecting flights.
                                </p>
                            </div>
                            <br />
                            <br />
                            {/* <br /> */}
                            <div className='project-item'>
                                {/* <h3>Project 3:</h3> */}
                                <p>
                                    {/* Description of project 3. It involves technologies such as Angular and TypeScript. */}
                                    To know the details regarding the same check out my resume.
                                </p>
                            </div>
                        </div>
                    </section>
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
    );
}

export default Portfolio;



