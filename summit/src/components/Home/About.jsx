import React, { useEffect, useState } from 'react';
 
const About = () => {
    const [showOrb, setShowOrb] = useState(false); // Start with banner2

    useEffect(() => {
        const timer = setInterval(() => {
            setShowOrb(prev => !prev); // Toggle the image state
        }, 5000); // Change every 5 seconds (adjust as needed)

        return () => clearInterval(timer); // Cleanup timer on unmount
    }, []);

    return (
        <section className="about-area ptb-120">
            <div className="container">
                <div className="row h-100 align-items-center">
                    <div className="col-lg-6">
                        <div className="about-content">
                            <span>Join The Event</span>
                            <h2><b>Dive</b> into the heart of AI Revolution</h2>
                            <p>Last September, the GenAI Summit 2023 in Silicon Valley welcomed 2,000 attendees, setting a remarkable precedent. This year, we're scaling new heights with the GenAI Summit 2024 in San Francisco. Hosted within the historic walls of the Palace of Fine Arts, the summit represents a portal to the dynamic world of generative AI. Over the course of three immersive days, we anticipate a gathering of at least 50,000 attendees during the event week. This event is more than a mere conference—it's a crucible of innovation, destined to shape the future of technology and cultivate the industry's next leaders.</p>
                            {/* <p>We are at the dawn of a new technological wave, with generative AI revealing a future of infinite possibilities. With over 1500 attendees, 50+ startups, and more than 500 developers, the summit brings together the world's most cutting-edge entrepreneurial teams and investment institutions to jointly explore the future of this field.</p> */}
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-image">
                            <img
                                src={showOrb ? require("../../assets/images/palace1.png") : require("../../assets/images/conference1.png")}
                                
                                className="about-img1" 
                                alt="about" 
                                style={{transition: 'opacity 0.5s ease-in', opacity: showOrb ? 0.8 : 1}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default About;

