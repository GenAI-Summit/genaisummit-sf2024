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
                                src={require("../../assets/images/about1.jpg")}
                                className="about-img1" 
                                alt="about" 
                            />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-content">
                            <span>Empowering Tomorrow's Innovators</span>
                            <h2>A Special Invitation for High School Students</h2>
                            <p>In our mission to nurture the next generation of AI enthusiasts, GPT DAO in partnership with KAI (K12 AI Initiative) is inviting local high school students with a keen interest in AI to partake in this landmark event for FREE. Due to space constraints, only 50 students will be selected from the first 100 applications. Preference will be accorded to those showcasing a fervent passion for AI and coding experience.
                            </p>
                        </div>
                        <a href="https://forms.gle/U7E5czneZmVc4ZGZ6" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Apply</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Features;
