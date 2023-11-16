import React, { useState, useEffect } from 'react';
import ModalVideo from 'react-modal-video';
 

const MainBanner = () => {
    const [state, setState] = useState({
        days: '',
        hours: '',
        minutes: '',
        seconds: '',
        isOpen: false
    });

    const openModal = () => {
        setState(prevState => ({ ...prevState, isOpen: true }));
    }

    const makeTimer = () => {
        let endTime = new Date("May 29 2024 09:00:00 PDT");			
        let endTimeParse = (Date.parse(endTime)) / 1000;
        let now = new Date();
        let nowParse = (Date.parse(now) / 1000);
        let timeLeft = endTimeParse - nowParse;
        let days = Math.floor(timeLeft / 86400); 
        let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        if (days < 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        }
        setState(prevState => ({ ...prevState, days, hours, minutes, seconds }));
    }

    useEffect(() => {
        const myInterval = setInterval(() => { 
            makeTimer();
        }, 1000);
        return () => clearInterval(myInterval);
    }, []);

    return (
        <React.Fragment>
            <ModalVideo 
                channel='youtube' 
                isOpen={state.isOpen} 
                videoId='cRXm1p-CNyk' 
                onClose={() => setState({isOpen: false})} 
            />
            
            <div className="main-banner item-bg">
                <video autoPlay loop muted className="video-background">
                    <source src={require("../../assets/videos/main-bg1.mp4")} type="video/mp4" />
                </video>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="main-banner-content">
                                <h1>Generative AI Summit San Francisco 2024</h1>

                                <ul>
                                    <li>
                                        <i className="icofont-compass"></i> Palace of Fine Arts, San Francisco, California</li>
                                    <li><i className="icofont-calendar"></i> May 27 - May 31, 2024</li>
                                </ul>

                                <div className="button-box">
                                    <a href="" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Coming Soon!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="event-countdown countdown1">
                    <div id="timer">
                        <div id="days">{state.days} <span>Days</span></div>
                        <div id="hours">{state.hours} <span>Hours</span></div>
                        <div id="minutes">{state.minutes} <span>Minutes</span></div>
                        <div id="seconds">{state.seconds} <span>Seconds</span></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default MainBanner;