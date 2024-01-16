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
                    <h2>Previous Speakers 
                    </h2>
                    {/* <a href="https://www.gptdao.ai/get-started" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Be our Speaker</a> */}
                    
                    <LaxDiv text="Speakers" dataPreset="driftRight" />
                </div>

                <div className="row">
                    {speakers.map(speaker => (
                        <div className="mb-5 col-lg-2 col-md-3 col-sm-4 col-4" key={speaker.name}>
                            <div className="single-speakers-box">

                                {/* here is all about each box of speakers */}
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
                    {/* <div className=""> */}
                        <div className="container">
                            <div className="section-title">
                                <h3>More to Come</h3>
                                <span>Announced Weekly</span>
                            </div>
                        </div>
                    {/* </div>  */}

                    
                </div>
            </div>
        </section>
   );
}
 
export default Speakers;