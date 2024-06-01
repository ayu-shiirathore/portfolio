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

                    <section className='skills-section'>
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
                            {/* <ul>
                                Pythom
                                Pythom
                                Pythom
                                Pythom
                                Pythom
                            </ul> */}
                        </div>
                    </section>

                    <section className='projects-section'>
                        <h2>Projects</h2>
                        <p>
                            Below are some of the projects I've worked on:
                        </p>
                        <div className='projects-list'>
                            <div className='project-item'>
                                <h3>Project 1:</h3>
                                <p>
                                    Description of project 1. It involves technologies such as HTML, CSS, and JavaScript.
                                </p>
                            </div>
                            <div className='project-item'>
                                <h3>Project 2:</h3>
                                <p>
                                    Description of project 2. It involves technologies such as React and Redux.
                                </p>
                            </div>
                            <div className='project-item'>
                                <h3>Project 3:</h3>
                                <p>
                                    Description of project 3. It involves technologies such as Angular and TypeScript.
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


