import React, { useEffect } from 'react';
// import lax from 'lax.js';
 
const About = () => {

    // useEffect(() => {
    //     lax.setup()
    
    //     const laxUpdate = () => {
    //         lax.update(window.scrollY)
    //     }

    //     document.addEventListener('scroll', laxUpdate, false)
    
    //     lax.update(window.scrollY)

    //     // Cleanup
    //     return () => {
    //         document.removeEventListener('scroll', laxUpdate, false)
    //     }
    // }, [])

    return (
        <section className="about-area ptb-120">
            <div className="container">
                <div className="row h-100 align-items-center">
                    <div className="col-lg-6">
                        <div className="about-content">
                            <span>Join The Event</span>
                            <h2><b>Build</b> the Future</h2>
                            <p>Join us in exploring future possibilities at the Generative AI Silicon Valley Summit 2023. This first large-scale generative AI conference in Silicon Valley will be held on September 23, 2023, at the Mission City Ballroom of the Santa Clara Convention Center. The event is hosted by GPT DAO, a community spontaneously formed by developers, entrepreneurs, and enthusiasts passionate about generative AI.</p>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-image">
                            <img src={require("../../assets/images/about1.jpg")} className="about-img1" alt="about" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default About;
