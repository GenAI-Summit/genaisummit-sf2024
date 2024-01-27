import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LaxDiv from '../Shared/LaxDiv';
import { speakers } from './speakersData';
import { speakers2 } from './speakersData2';
import { speakersnew } from './speakersDataNew';
import { speakersrecent } from './speakersRecent';
import Slider from 'react-slick'; // Assuming 'react-slick' and 'slick-carousel' are installed
import './recentSpeakersSlider.css';


const Speakers = () => {
    const [currentSpeakers, setCurrentSpeakers] = useState(speakers);
    const [isSpeakers2Shown, setIsSpeakers2Shown] = useState(false);

    const toggleSpeakers = () => {
        setCurrentSpeakers(isSpeakers2Shown ? speakers : speakers2);
        setIsSpeakers2Shown(!isSpeakers2Shown);
    };

    const handleImageClick = (popup) => {
        const imagePath = popup?.default || popup;
        const newWindow = window.open(imagePath, '_blank', 'width=1100,height=700');

        // Add event listener to the new window for closing on outside click
        newWindow.onblur = function() {
            newWindow.close();
        };
        newWindow.onload = function() {
            newWindow.document.body.onclick = function(e) {
                if (e.target === newWindow.document.body) {
                    newWindow.close();
                }
            };
        };
    };

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={`${className} btn btn-primary`}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
          >
            Next
          </div>
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
        
          <div
            className={`${className} btn btn-primary`}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
          >
            Previous
          </div>
          
        );
      }



    const sliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        className: "slick-slider-recent-speakers",
        slide: "slick-slide-recent-speakers",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    

    return (
        <section className='speakers-area-two ptb-120'>
            
            <div className='container'>
              
                <span className="new-speakers-span">NEW SPEAKERS UPDATE DAILY!</span>
              
                <div className="" style={{ maxWidth: '100%', overflow: 'hidden' }}>
                    <h2>Newly Updated Speakers</h2>  
                    
                </div>
                {/* Slick Slider Container */}
                <div className='row'>
                <Slider {...sliderSettings}>
                    {speakersrecent.map(speaker => (
                        <div key={speaker.name} className="slick-slide-recent-speakers">
                            <div className='single-speakers-box'>
                                <div className='speakers-image' onClick={() => handleImageClick(speaker.popup)}>
                                    <img src={speaker.image} alt={speaker.name} style={{cursor: 'pointer'}} />
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
                </Slider>
                </div>
            <br></br>
            <br></br>
            <br></br>
          
            </div>



            <div className='container'>
                <div className="section-title">
                    <span>Listen to the Event Speakers</span>
                    <h2>Speakers</h2>  <h5>--- GenAI SF 2024</h5>
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
//     const [currentSpeakers, setCurrentSpeakers] = useState(speakers);
//     const [isSpeakers2Shown, setIsSpeakers2Shown] = useState(false);

//     const toggleSpeakers = () => {
//         setCurrentSpeakers(isSpeakers2Shown ? speakers : speakers2);
//         setIsSpeakers2Shown(!isSpeakers2Shown);
//     };

    // const handleImageClick = (popup) => {
    //     const imagePath = popup?.default || popup;
    //     const newWindow = window.open(imagePath, '_blank', 'width=1200,height=900');
    //     newWindow.onload = function() {
    //         newWindow.document.body.onclick = function(e) {
    //             if (e.target === newWindow.document.body) {
    //                 newWindow.close();
    //             }
    //         };
    //     };
    // };

//     return (
//         <section className='speakers-area-two ptb-120'>
//             <div className='container'>
//                 <div className="section-title">
//                     <span>Listen to the Event Speakers</span>
//                     <h2>Speakers </h2>  <h5>--- GenAI SF 2024</h5>
//                     <a href="https://www.gptdao.ai/get-started" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Be our Speaker</a>
//                 </div>
//                 <div className='row'>
//                     {speakersnew.map(speakernew => (
//                         <div className='mb-5 col-lg-2 col-md-3 col-sm-4 col-4' key={speakernew.name}>
//                             <div className='single-speakers-box'>
//                                 <div className='speakers-image' onClick={() => handleImageClick(speakernew.popup)}>
//                                     <img src={speakernew.image} alt={speakernew.name} style={{cursor: 'pointer'}} />
//                                 </div>
//                                 <div className="speakers-content">
//                                     <h3>{speakernew.name}</h3>
//                                     <span>{speakernew.title}</span>
//                                     <span>{speakernew.company}</span>
//                                     <ul className="social">
//                                         {speakernew.socialLinks.map(link => (
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
//                 </div>
//             </div>
//             <div className="container">
//                             <div className="section-title">
//                                 <h3>More to Come...</h3>
//                                 <span>Update Weekly</span>
//                             </div>
//                         </div>


//             <div className="container">
//                 <div className="section-title">
//                     <h2>Previous Speakers</h2> <h5>--- GenAI SV 2023</h5>
//                 </div>
//                 <div className="row">
//                     {currentSpeakers.map(speaker => (
//                         <div className="mb-5 col-lg-2 col-md-3 col-sm-4 col-4" key={speaker.name}>
//                             <div className="single-speakers-box">
//                                 <div className="speakers-image" >
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
//                 </div>
//                 <button onClick={toggleSpeakers} className="btn btn-primary">
//                     {isSpeakers2Shown ? 'Close' : 'Load more'}
//                 </button>
//             </div>
//         </section>
//     );
// };

// export default Speakers;

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