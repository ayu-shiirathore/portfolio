import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import React, { useEffect, useState } from 'react';
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animation')
    const refForm = useRef()


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    }, []);


    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('default_service', 'template_46r5nie', refForm.current, 'hmlhD7-UKlXDrkBuW')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }


    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
                    </h1>

                    <p>
                    I'm always eager to connect with fellow professionals, collaborators, and anyone who shares a passion for technology and innovation. Whether you have a project in mind, or just want to say hello, feel free to reach out. I'm open to discussing new opportunities, collaborative projects, and any exciting ideas you might have.However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
                    </p>

                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                        ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>

                </div>
                <div className="info-map">
          Ayushi Rathore,
          <br />
          Thapar Institute Of Engineering and Technology ,
          <br />
          India <br />
          <br />
          <span>ayurathore2307@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[30.3564, 76.3625]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[30.3564, 76.3625]}>
              <Popup>Ayushi lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}



export default Contact