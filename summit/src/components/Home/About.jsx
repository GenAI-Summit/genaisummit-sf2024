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
                        <span>A Full Week of Comprehensive Activities</span>
                            <h2><b>GenAI</b> Summit <br/>San Francisco 2024</h2>
                            
                            <p>
                            Dive into the heart of innovation at the GenAI Summit San Francisco 2024, set in the awe-inspiring, historic, Palace of Fine Arts from May 27th to June 1st. This summit is not just an event, it’s an extraordinary convergence of the brightest minds in Generative AI, encapsulating the spirit of the future.
<br/>
<br/>
<h5>The Summit at a glance</h5>

•	Venue Size: 200,000+ square feet of immersive experiences. <br></br>
•	Anticipated Audience: 50,000+ attendees from around the globe.<br></br>
•	Exhibitors: 500+ exhibitors showcasing groundbreaking AI solutions.<br></br>
•	Speakers: 200+ industry-leading experts sharing invaluable insights.<br></br>
•	Venture Capitalists: 300+ VCs looking for the next big idea.<br></br>
•	Media Coverage: 50+ media outlets capturing every exciting moment.<br></br>
•	Dynamic Tracks: 20+ tracks showcasing exhilarating discoveries and information.
</p>

                            
                            {/* <p>We are at the dawn of a new technological wave, with generative AI revealing a future of infinite possibilities. With over 1500 attendees, 50+ startups, and more than 500 developers, the summit brings together the world's most cutting-edge entrepreneurial teams and investment institutions to jointly explore the future of this field.</p> */}
                        </div>
                    </div>

                    <div className="col-lg-6">
                        {/* <div className="about-image">
                            <img


                                src={showOrb ? require("../../assets/images/conference1.png") : require("../../assets/images/palace4.png")}

                                
                                
                                className="about-img1" 
                                alt="about" 
                                style={{transition: 'opacity 0.5s ease-in', opacity: showOrb ? 0.8 : 1}}
                            />
                        </div> */}


                        
                        <div className="about-content">
                        <div className="col-lg-30">
                        <div>
                            <img


                                src={require("../../assets/images/palace4.png")}


                                className="about-img1" 
                                alt="about" 
                            />
                        </div>
                        
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}
 
export default About;

