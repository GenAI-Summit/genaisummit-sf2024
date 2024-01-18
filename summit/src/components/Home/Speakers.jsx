import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LaxDiv from '../Shared/LaxDiv';
import { speakers } from './speakersData';
import { speakers2 } from './speakersData2';
import { speakersnew } from './speakersDataNew';


const Speakers = () => {
    const [currentSpeakers, setCurrentSpeakers] = useState(speakers);
    const [isSpeakers2Shown, setIsSpeakers2Shown] = useState(false);

    const toggleSpeakers = () => {
        setCurrentSpeakers(isSpeakers2Shown ? speakers : speakers2);
        setIsSpeakers2Shown(!isSpeakers2Shown);
    };

    const handleImageClick = (popup) => {
        const imagePath = popup?.default || popup;
        const newWindow = window.open(imagePath, '_blank', 'width=600,height=400');
        newWindow.onload = function() {
            newWindow.document.body.onclick = function(e) {
                if (e.target === newWindow.document.body) {
                    newWindow.close();
                }
            };
        };
    };

    return (
        <section className='speakers-area-two ptb-120'>
            <div className='container'>
                <div className="section-title">
                    <span>Listen to the Event Speakers</span>
                    <h2>Speakers </h2>  <h5>--- GenAI SF 2024</h5>
                    <a href="https://www.gptdao.ai/get-started" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Be our Speaker</a>
                </div>
                <div className='row'>
                    {speakersnew.map(speakernew => (
                        <div className='mb-5 col-lg-2 col-md-3 col-sm-4 col-4' key={speakernew.name}>
                            <div className='single-speakers-box'>
                                <div className='speakers-image' onClick={() => handleImageClick(speakernew.popup)}>
                                    <img src={speakernew.image} alt={speakernew.name} style={{cursor: 'pointer'}} />
                                </div>
                                <div className="speakers-content">
                                    <h3>{speakernew.name}</h3>
                                    <span>{speakernew.title}</span>
                                    <span>{speakernew.company}</span>
                                    <ul className="social">
                                        {speakernew.socialLinks.map(link => (
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
                </div>
            </div>
            <div className="container">
                            <div className="section-title">
                                <h3>More to Come...</h3>
                                <span>Update Weekly</span>
                            </div>
                        </div>


            <div className="container">
                <div className="section-title">
                    <h2>Previous Speakers</h2> <h5>--- GenAI SV 2023</h5>
                </div>
                <div className="row">
                    {currentSpeakers.map(speaker => (
                        <div className="mb-5 col-lg-2 col-md-3 col-sm-4 col-4" key={speaker.name}>
                            <div className="single-speakers-box">
                                <div className="speakers-image" >
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
                </div>
                <button onClick={toggleSpeakers} className="btn btn-primary">
                    {isSpeakers2Shown ? 'Close' : 'Load more'}
                </button>
            </div>
        </section>
    );
};

export default Speakers;

// const Speakers = () => {

//     return (
//         <section className="speakers-area-two ptb-120">
//             <div className="container">
//                 <div className="section-title">
//                     <span>Listen to the Event Speakers</span>
//                     <h2>Previous Speakers
//                     </h2>
//                     <a href="https://www.gptdao.ai/get-started" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Be our Speaker</a>
                    
//                     <LaxDiv text="Speakers" dataPreset="driftRight" />
//                 </div>

//                 <div className="row">
//                     {speakers.map(speaker => (
//                         <div className="mb-5 col-lg-2 col-md-3 col-sm-4 col-4" key={speaker.name}>
//                             <div className="single-speakers-box">

//                                 {/* here is all about each box of speakers */}
//                                 <div className="speakers-image">
//                                     <img src={speaker.image} alt={speaker.name} />
//                                 </div>

//                                 <div className="speakers-content">
//                                     <h3>{speaker.name}</h3>
//                                     <span>{speaker.title}</span>
//                                     <span>{speaker.company}</span>

//                                     <ul className="social">
//                                         {speaker.socialLinks.map(link => (
//                                             <li key={link.href}>
//                                                 <a target="_blank" rel="noopener noreferrer" href={link.href}>
//                                                     <i className={link.icon}></i>
 
//                                                 </a>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             </div>
                            
//                         </div>
//                     ))}
//                     {/* <div className=""> */}
                        // <div className="container">
                        //     <div className="section-title">
                        //         <h3>More to Come</h3>
                        //         <span>Announced Weekly</span>
                        //     </div>
                        // </div>
//                     {/* </div>  */}

                    
//                 </div>
//             </div>
//         </section>
//    );
// }


 
// export default Speakers;