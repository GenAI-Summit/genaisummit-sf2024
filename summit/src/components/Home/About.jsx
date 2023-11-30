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
                            <h2><b>Gen</b>erative  AI Summit <br/>San Francisco 2024</h2>
                            
                            <p>
                            Spanning a full week from May 27 to June 1,  2024, the Summit offers a range of activities including hackathons, top company showcases, market and business development sessions, hardware and chip innovations, AI agent showcases, large model competitions, education and research discussions, career opportunities, entertainment, afterparties, and VIP gatherings. This comprehensive schedule ensures that there is something of interest for every attendee, regardless of their background or interests.
The GenAI Summit SF 2024 promises to be more than just a conference; it's a hub of innovation, learning, and networking for the AI community. 

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

<div className="col-lg-20">
                        <div>
                            <img


                                src={require("../../assets/images/palace4.png")}


                                className="about-img1" 
                                alt="about" 
                            />
                        </div>
                        
                        </div>
                        
                        {/* <div className="about-image">
                            <img


                                src={showOrb ? require("../../assets/images/sample.png") : require("../../assets/images/main-bg1.jpg")}

                                
                                
                                className="about-img1" 
                                alt="about" 
                                style={{transition: 'opacity 0.5s ease-in', opacity: showOrb ? 0.8 : 1}}
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default About;

