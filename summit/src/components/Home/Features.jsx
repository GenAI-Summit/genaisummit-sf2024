import React from 'react';
import LaxButton from '../Shared/LaxButton';

const Features = () => {
    
    return (
        <section className="about-area ptb-120 bg-image">
            <div className="container">
                <div className="row h-100 align-items-center">
                    

                    <div className="col-lg-6">
                        <div className="about-content">
                            <span>Creativity, Talents, More</span>
                            <h2> <b>Who</b> Should Attend</h2>
                            {/* <p>Networking Galore: Rub shoulders with the best minds in the AI realm, form invaluable connections, and usher in collaborative innovation.
                            Hear from the stars of the industry as they deliver keynote speeches that promise to enlighten and inspire. Engage with these visionaries during interactive sessions, 
                            where you can ask your burning questions and gain invaluable insights. 
                            The GenAI Summit 2024 isn't just an event; it's where the future of AI becomes your present. 
                            Join us to be part of molding the tech landscape of tomorrow.
                            </p> */}
                            <div className="">
                            <h5> AI Practitioners</h5> 
                            <h5> Tech Entrepreneurs</h5>
                            <h5> Industry Leaders</h5>
                            <h5> Academics and Researchers</h5>
                            <h5> Policy Makers</h5>
                            <h5> Investors & Founders</h5>
                            </div>
                        </div>
                        {/* <a href="https://forms.gle/U7E5czneZmVc4ZGZ6" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Apply</a> */}
                    </div>

                    <div className="col-lg-6">
                        <div>
                            <img
                                src={require("../../assets/images/palace11.png")}
                                className="about-img1" 
                                alt="about" 
                            />
                        </div>
                    </div>
                </div>

                
            </div>
           

            <br></br>
            <br></br>
            <br></br>

            <div className="container">
                <div className="row h-100 align-items-center">
                    <div className="col-lg-6">
                        <div>
                            <img
                                src={require("../../assets/images/conference22.png")}
                                className="about-img1" 
                                alt="about" 
                            />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-content">
                            <span>Empowering Tomorrow's Innovators</span>
                            <h2> <b>Why</b> Attend</h2>
                            {/* <p>Networking Galore: Rub shoulders with the best minds in the AI realm, form invaluable connections, and usher in collaborative innovation.
                            Hear from the stars of the industry as they deliver keynote speeches that promise to enlighten and inspire. Engage with these visionaries during interactive sessions, 
                            where you can ask your burning questions and gain invaluable insights. 
                            The GenAI Summit 2024 isn't just an event; it's where the future of AI becomes your present. 
                            Join us to be part of molding the tech landscape of tomorrow.
                            </p> */}
                            <h6> Networking Galore:</h6> <p> Rub shoulders with the best minds in the AI realm, form
invaluable connections, and usher in collaborative innovation.</p>
<h6>Knowledge Feast: </h6><p>With an array of keynote speeches, panels, and hands-on
workshops, delve into the latest advancements and practical wisdom the field
has to offer.</p>
<p><h6>Spotlight on Innovation:</h6> Discover and explore groundbreaking projects and
startups in our Innovation Alley.</p>
<p><h6>Tailored Learning Path:</h6> Choose from a myriad of tracks to tailor your learning
experience to your professional interests and needs.</p>
                        </div>
                    </div>
                </div>
            </div>   
        </section>
    );
}
 
export default Features;
