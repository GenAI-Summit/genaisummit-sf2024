import React from 'react';
import LaxButton from '../Shared/LaxButton';

const Features = () => {
    
    return (
        <section className="about-area ptb-120 bg-image">
            <div className="container">
                <div className="row h-100 align-items-center">
                    

                    <div className="col-lg-6">
                        {/* <div className="about-content">
                            <span>Creativity, Talents, More</span>
                            <h2> <b>Who</b> Should Attend</h2>
                            <p>Networking Galore: Rub shoulders with the best minds in the AI realm, form invaluable connections, and usher in collaborative innovation.
                            Hear from the stars of the industry as they deliver keynote speeches that promise to enlighten and inspire. Engage with these visionaries during interactive sessions, 
                            where you can ask your burning questions and gain invaluable insights. 
                            The GenAI Summit 2024 isn't just an event; it's where the future of AI becomes your present. 
                            Join us to be part of molding the tech landscape of tomorrow.
                            </p>
                            <div className="">
                            <h5> AI Practitioners</h5> 
                            <h5> Tech Entrepreneurs</h5>
                            <h5> Industry Leaders</h5>
                            <h5> Academics and Researchers</h5>
                            <h5> Policy Makers</h5>
                            <h5> Investors & Founders</h5>
                            </div>
                        
                        <a href="https://forms.gle/U7E5czneZmVc4ZGZ6" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Apply</a>
                        </div> */}
                        <div className="about-content">
                            <span>Hands-On Experiences: Learning by Doing</span>
                            
                            <h2> <b>Workshops </b> and Interactive Sessions</h2>
                            
                            <div className="">
                            <h5> Distinguished Speakers and Returnees:</h5>
                            <p> Many of the esteemed speakers from our previous event, acclaimed for their contributions to AI, will be returning. Their presence ensures a continuity of expertise and thought leadership.
</p> 
<h5> Startup Pitch Sessions:</h5>
                            <p> For the entrepreneurial minds, these sessions provide a platform to pitch AI-based business ideas to a panel of investors and industry leaders.
</p> 
                            <h5>AI Ethics Roundtables: </h5><p>Participate in roundtable discussions on AI ethics, where you can debate, discuss, and contribute to developing responsible AI guidelines.</p>

                            <h5> AI Coding Bootcamps:</h5>
                            <p>  Whether you're a beginner or an experienced coder, our bootcamps offer the chance to learn and improve your AI coding skills under the guidance of experts.
</p> 
                            
                            
                            
                            
                            <h5>AI in Art Workshops:</h5>
                            <p>Explore the intersection of AI and creativity in these workshops where art meets algorithms. Discover how AI is opening new frontiers in artistic expression.</p>

                        
                            </div>
                        </div>
                        
                    </div>

                    <div className="col-lg-6">
                        <div>
                            <img


                                src={require("../../assets/images/palace1.png")}


                                className="about-img1" 
                                alt="about" 
                            />
                        </div>
                        <br/>
                        <div>
                            <img


                                src={require("../../assets/images/femaleboss.png")}


                                className="about-img1" 
                                alt="about" 
                            />
                            <p>(Images from previous summit)</p>
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
                                src={require("../../assets/images/networking.JPG")}
                                className="about-img1" 
                                alt="about" 
                            />
                        </div>
                        <p>(Images from previous summit)</p>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-content">
                            <span>Empowering Tomorrow's Innovators</span>
                            <h2> <b>Net</b>working</h2>
                            {/* <p>Networking Galore: Rub shoulders with the best minds in the AI realm, form invaluable connections, and usher in collaborative innovation.
                            Hear from the stars of the industry as they deliver keynote speeches that promise to enlighten and inspire. Engage with these visionaries during interactive sessions, 
                            where you can ask your burning questions and gain invaluable insights. 
                            The GenAI Summit 2024 isn't just an event; it's where the future of AI becomes your present. 
                            Join us to be part of molding the tech landscape of tomorrow.
                            </p> */}
                            <h5> AI Innovators’ Lounge:</h5> <p> A dedicated space for attendees to meet, share ideas, and collaborate. Whether you’re seeking a mentor, a partner, or just an interesting conversation, the lounge is the perfect place to connect.
</p>
                            <h5>Industry-Specific Meetups:</h5>
                            <p>Organized meetups for various sectors like technology, finance, and healthcare allow attendees to network with peers in their field, discussing challenges and opportunities specific to their industry.</p>
                            <p><h5>More Entertainment:</h5> The summit will feature a spectacular array of entertainment, inviting Hollywood celebrities, renowned musicians, and artists to perform at the premier theater and the grand venue of the Palace of Fine Arts. This section promises a dazzling blend of technology and artistry, providing attendees with a unique and memorable experience that celebrates the convergence of AI, culture, and entertainment.
</p>
                            
                            

                                    </div>
                                    
                    </div>

                    
                    
                    
                </div>
            </div>   
        </section>
    );
}
 
export default Features;
