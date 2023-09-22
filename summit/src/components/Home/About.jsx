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
                            <h2><b>Build</b> the Future</h2>
                            <p>Join us in exploring future possibilities at the Generative AI Silicon Valley Summit 2023. This first large-scale generative AI conference in Silicon Valley will be held on September 23, 2023, at the Mission City Ballroom of the Santa Clara Convention Center. The event is hosted by GPT DAO, a community spontaneously formed by developers, entrepreneurs, and enthusiasts passionate about generative AI.</p>
                            <p>We are at the dawn of a new technological wave, with generative AI revealing a future of infinite possibilities. With over 1000 attendees, 50+ startups, and more than 500 developers, the summit brings together the world's most cutting-edge entrepreneurial teams and investment institutions to jointly explore the future of this field.</p>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-image">
                            <img
                                src={showOrb ? require("../../assets/images/orb.jpeg") : require("../../assets/images/banner2.png")}
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

