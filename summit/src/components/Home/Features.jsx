import React from 'react';
import LaxButton from '../Shared/LaxButton';

const Features = () => {
    return (
        <section className="about-area ptb-120 bg-image">
            <div className="container">
                <div className="row h-100 align-items-center">
                    <div className="col-lg-6">
                        <div>
                            <img
                                src={require("../../assets/images/conference2.png")}
                                className="about-img1" 
                                alt="about" 
                            />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-content">
                            <span>Empowering Tomorrow's Innovators</span>
                            <h2>Why Attend</h2>
                            <p>Networking Galore: Rub shoulders with the best minds in the AI realm, form invaluable connections, and usher in collaborative innovation.
                            Hear from the stars of the industry as they deliver keynote speeches that promise to enlighten and inspire. Engage with these visionaries during interactive sessions, 
                            where you can ask your burning questions and gain invaluable insights. 
                            The GenAI Summit 2024 isn't just an event; it's where the future of AI becomes your present. 
                            Join us to be part of molding the tech landscape of tomorrow.
                            </p>
                        </div>
                        {/* <a href="https://forms.gle/U7E5czneZmVc4ZGZ6" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Apply</a> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Features;
