import React from 'react';
 
const EventSchedules = () => {
    return (
        <div className="tab_content">
            <div id="tab1" className="tabs_item">
                <ul className="accordion">
                    <li className="accordion-item">
                        <div className="accordion-title">
                            <div className="schedule-info">
                                <h3>Keynote 1: Jim Fan (Senior AI Scientist @ NVIDIA)</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 8:30AM - 9:00AM</li>
                                </ul>
                            </div>
                        </div>
                        
                        {/* <div className="accordion-content">
                            <p>content TBD</p>

                            <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-7">
                                    <div className="location">
                                        <b>Location:</b> Main Entrance, Santa Clara Conventin Ceneter
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </li>

                    <li className="accordion-item">
                        <div className="accordion-title">
                            <div className="schedule-info">
                                <h3>Keynote 2: Rashmi Misra (GM of AI & Emerging Tech @ Microsoft)</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 9:00AM - 9:30AM</li>
                                    {/* <li><i className="icofont-user-suited"></i> Speaker Name</li> */}
                                </ul>
                            </div>
                        </div>
                        
                        {/* <div className="accordion-content">
                            <p>content TBD</p>

                            <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-7">
                                    <div className="location">
                                        <b>Location:</b> Room A, Santa Clara Conventin Ceneter
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </li>

                    <li className="accordion-item">
                        <div className="accordion-title">
                            <div className="schedule-info">
                                <h3>Keynote 3: TBD</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 9:30AM - 10:00AM</li>
                                    {/* <li><i className="icofont-user-suited"></i> Speaker Name</li> */}
                                </ul>
                            </div>
                        </div>
                        
                        {/* <div className="accordion-content">
                            <p>TBD</p>

                            <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-7">
                                    <div className="location">
                                        <b>Location:</b> Room B, Santa Clara Conventin Ceneter
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </li>

                    <li className="accordion-item">
                        <div className="accordion-title">
                            <div className="schedule-info">
                                <h3>Keynote 4: TBD</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 10:00AM - 10:30AM</li>
                                </ul>
                            </div>
                        </div>
                        
                        {/* <div className="accordion-content">
                            <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-7">
                                    <div className="location">
                                        <b>Location:</b> Room C, Santa Clara Conventin Ceneter
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </li>

                    <li className="accordion-item">
                        <div className="accordion-title">
                            <div className="schedule-info">
                                <h3>Keynote 5: Harrison Chase (Founder & CEO @ LangChain)</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 10:30AM - 11:00AM</li>
                                    {/* <li><i className="icofont-user-suited"></i> Speaker Name</li> */}
                                </ul>
                            </div>
                        </div>
                        
                        {/* <div className="accordion-content">
                            <p>TBD</p>

                            <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-7">
                                    <div className="location">
                                        <b>Location:</b> Room D, Santa Clara Conventin Ceneter
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </li>

                    <li className="accordion-item">
                        <div className="accordion-title">
                            <div className="schedule-info">
                                <h3>Keynote 6: Arvind Jain (CEO @ Glean)</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 11:00AM - 11:30AM</li>
                                    {/* <li><i className="icofont-user-suited"></i> Speaker Name</li> */}
                                </ul>
                            </div>
                        </div>
                        
                        {/* <div className="accordion-content">
                            <p>TBD</p>

                            <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-7">
                                    <div className="location">
                                        <b>Location:</b> Room A, Santa Clara Conventin Ceneter
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </li>

                    <li className="accordion-item">
                        <div className="accordion-title">
                            <div className="schedule-info">
                                <h3>Keynote 7: Jason Wei (AI Researcher @ OpenAI)</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 11:30AM - 12:00pm</li>
                                    {/* <li><i className="icofont-user-suited"></i> Speaker Name</li> */}
                                </ul>
                            </div>
                        </div>
                        
                        {/* <div className="accordion-content">
                            <p>TBD</p>

                            <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-7">
                                    <div className="location">
                                        <b>Location:</b> Room A, Santa Clara Conventin Ceneter
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </li>

                    <li className="accordion-item">
                        <div className="accordion-title">
                            <div className="schedule-info">
                                <h3>Lunch break</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 12:00pm - 1:00PM</li>
                                </ul>
                            </div>
                        </div>
                        
                        {/* <div className="accordion-content">
                            <p>description.</p>

                            <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-7">
                                    <div className="location">
                                        <b>Location:</b> Room C, Santa Clara Conventin Ceneter
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </li>

                    <li className="accordion-item">
                        <div className="accordion-title">
                            <div className="schedule-info">
                                <h3>Panel 1: Generative Agents</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 1:00PM - 2:00PM</li>
                                    {/* <li><i className="icofont-user-suited"></i> Jeremiah Ouyang, CC Gong@cerebreal VC</li> */}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            <p>Rajat Suri (Co-founder @Lima), Joon Sung Park (Pioneer researcher @Generative Agent), 
                                Shawn Wang (Founder @Smol AI)</p>

                            {/* <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-7">
                                    <div className="location">
                                        <b>Location:</b> Room A, Santa Clara Conventin Ceneter
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </li>

                    <li className="accordion-item">
                        <div className="accordion-title">
                            <div className="schedule-info">
                                <h3>Panel 2: Open Vs. Closed - The Dichotomy Of OpenSource Models In AI</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 2:00PM - 3:00PM </li>
                                    {/* <li><i className="icofont-user-suited"></i> Jerry Liu@Llama Index </li> */}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            <p>Chunting Zhou (Research Scientist @Meta AI), Anton Troynikov (Founder @Chroma), 
                                Lianmin Zheng (Author @Vicuna), Li Erran Li (Head of Science @AWS), Shishir Patil (Creator @Gorilla)</p>

                            {/* <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-7">
                                    <div className="location">
                                        <b>Location:</b> Room B, Santa Clara Conventin Ceneter
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </li>

                    <li className="accordion-item">
                        <div className="accordion-title">
                            <div className="schedule-info">
                                <h3>Panel 3: Tech Stacks Powering LLM Deployment</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 3:00PM - 4:00PM</li>
                                    {/* <li><i className="icofont-user-suited"></i> Panel guest name </li> */}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            <p> Jason Lopatecki (Founder & CEO @Arize AI), Jerry Liu (Co-founder & CEO @LlamaIndex), Yangqing Jia (Founder @Lepton AI), 
                                Michael Jung (Founder @DeepBrain), Aravind Srinivas (Co-founder & CEO @Perplexity)</p>
                            {/* <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-7">
                                    <div className="location">
                                        <b>Location:</b> Room C, Santa Clara Conventin Ceneter
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </li>

                    <li className="accordion-item">
                        <div className="accordion-title">
                            <div className="schedule-info">
                                <h3>Panel 4: The VC Perspective On Generative AI Investment</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 4:00PM - 5:00PM </li>
                                    {/* <li><i className="icofont-user-suited"></i> Panel guest name </li> */}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            <p>Murray Newlands (Investor @Open Future Technology), IOBC Capital, Nathaniel Barling (Product & AI @a16z)</p>

                            {/* <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-7">
                                    <div className="location">
                                        <b>Location:</b> Room D, Santa Clara Conventin Ceneter
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </li>

                    <li className="accordion-item">
                        <div className="accordion-title">
                            <div className="schedule-info">
                                <h3>Panel 5: Social Networking</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 5:00PM-6:00PM </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            <p>Shaun Wei (Founder & CEO @RealChar.), Yichong Xu (AI Researcher @Character AI), Robin Duan (Founder & CEO @MetaY)</p>

                            {/* <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-7">
                                    <div className="location">
                                        <b>Location:</b> Room A, Santa Clara Conventin Ceneter
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </li>

                </ul>	
            </div>
        </div>

    );
}
 
export default EventSchedules;