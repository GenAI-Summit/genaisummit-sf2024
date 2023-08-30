import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LaxDiv from '../Shared/LaxDiv';
import { speakers } from './speakersData'; 

const Speakers = () => {
    return (
        <section className="speakers-area-two ptb-120">
            <div className="container">
                <div className="section-title">
                    <span>Listen to the Event Speakers</span>
                    <h2>Our Speakers</h2>
                    <LaxDiv text="Speakers" dataPreset="driftRight" />
                </div>

                <div className="row">
                    {speakers.map(speaker => (
                        <div className="col-lg-2 col-md-3 col-sm-4 col-4" key={speaker.name}>
                            <div className="single-speakers-box">
                                <div className="speakers-image">
                                    <img src={speaker.image} alt={speaker.name} />
                                </div>

                                <div className="speakers-content">
                                    <h3>{speaker.name}</h3>
                                    <span>{speaker.title}</span>
                                    <span>{speaker.company}</span>

                                    <ul className="social">
                                        {speaker.socialLinks.map(link => (
                                            <li key={link.href}>
                                                <a target="_blank" rel="noopener noreferrer" href={link.href}>
                                                    <i className={link.icon}></i>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-speakers-box">
                            <div className="speakers-content">
                                <h3><Link to="#">More to Come</Link></h3>
                                <span>Announced Weekly</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Speakers;