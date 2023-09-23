import React from 'react';
 
const EventSchedules = () => {
    return (
        <div className="tab_content">
            <div id="tab1" className="tabs_item">
                <ul className="accordion">
                    <li className="accordion-item">
                        <div className="accordion-title">
                            <div className="schedule-info">
                                <h3>Keynot 1: GPTDAO Opening</h3>

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
                                <h3>Keynote 3: Jerry Liu (Co-Founder & CEO @LlamaIndex)</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 9:30AM - 10:30AM</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-7">
                                    <div className="location">
                                        <b>Topic:</b> Building Performant RAG Applications for Production
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion-item">
                        <div className="accordion-title">
                            <div className="schedule-info">
                                <h3>Keynote 4: Harrison Chase (Founder & CEO @ LangChain)</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 10:30AM - 11:00AM</li>
                                    {/* <li><i className="icofont-user-suited"></i> Speaker Name</li> */}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            {/* <p>TBD</p> */}

                            <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-7">
                                    <div className="location">
                                        <b>Topic:</b> Building Context Aware Reasoning Applications
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion-item">
                        <div className="accordion-title">
                            <div className="schedule-info">
                                <h3>Keynote 5: Arvind Jain (CEO @ Glean)</h3>

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
                                <h3>Keynote 6: Jason Wei (AI Researcher @ OpenAI)</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 11:30AM - 12:00pm</li>
                                    {/* <li><i className="icofont-user-suited"></i> Speaker Name</li> */}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            {/* <p>TBD</p> */}

                            <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-7">
                                    <div className="location">
                                        <b>Topic:</b> New Paradigms in the Large Language Model Renaissance
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="accordion-item">
                        <div className="accordion-title">
                            <div className="schedule-info">
                                <h3>Keynote 7: Yan Zhao (Vice Mayor @ City of Saratoga)</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 12:00AM - 12:15pm</li>
                                    {/* <li><i className="icofont-user-suited"></i> Speaker Name</li> */}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            {/* <p>TBD</p> */}

                            <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-7">
                                    <div className="location">
                                        <b>Topic:</b> AI in Governance: Opportunities and Ethical Considerations
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion-item">
                        <div className="accordion-title">
                            <div className="schedule-info">
                                <h3>Lunch break</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 12:15pm - 1:00PM</li>
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
                                <h3>Panel 1: Generative Agents & Social Networking</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 1:00PM - 2:00PM</li>
                                    {/* <li><i className="icofont-user-suited"></i> Jeremiah Ouyang, CC Gong@cerebreal VC</li> */}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            <p>
                                Shawn Wang (Founder @Smol AI), Shaun Wei (Founder & CEO @RealChar.), Yichong Xu (AI Researcher @Character AI), 
                                Florence Li (CCO @MetaY)</p>

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
                                <h3>Panel 2: Open Vs. Closed - The Dichotomy Of Open-Source Models In AI</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 2:00PM - 3:00PM </li>
                                    {/* <li><i className="icofont-user-suited"></i> Jerry Liu@Llama Index </li> */}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            <p>Anton Troynikov (Founder @Chroma), Chunting Zhou (Research Scientist @Meta AI), 
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
                            <p> Jason Lopatecki (Founder & CEO @Arize AI), Jerry Liu (Co-founder & CEO @LlamaIndex), Aravind Srinivas (Co-founder & CEO @Perplexity)</p>
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
                                <h3>Panel 4: Rise of Generative AI in SaaS and Robotics</h3>

                                <ul>

                                    <li><i className="icofont-wall-clock"></i> 4:00PM - 4:45PM </li>


                                    {/* <li><i className="icofont-user-suited"></i> Panel guest name </li> */}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            <p>Amin Ahmad (Founder & CTO @Vectara), Minfa Wang (Autonomous Driving TechLead), Jing Wang (Storytell.AI), TBD (scale.ai)</p>

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
                                <h3>
                                Fireside Talk: AI in the Future of Workforce and Education
                                </h3>

                                <ul>

                                    <li><i className="icofont-wall-clock"></i> 4:45PM-5:30PM </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">

                            <p>Jonathan Heyne (COO @DeepLearning.AI), Kian Katanforoosh (CEO & Founder @Workera), Ziren Lin (Senior Data Scientist @McKinsey AI) </p>



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