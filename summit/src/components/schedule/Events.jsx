import React from 'react';
 
const EventSchedules = () => {
    return (
        <div className="tab_content">
            <div id="tab1" className="tabs_item">
                <ul className="accordion">
                    <li className="accordion-item">
                        <div className="accordion-title">
                            <div className="schedule-info">
                                <h3>Checkin and Networking</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 9:00AM - 9:30AM</li>
                                </ul>
                            </div>
                        </div>
                        
                        {/* <div className="accordion-content">
                            <p>description.</p>

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
                                <h3>Keynote: Opportunities and Challenges in AI Startups</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 9:30AM - 10:00AM</li>
                                    {/* <li><i className="icofont-user-suited"></i> Speaker Name</li> */}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            <p>This keynote presents a panoramic view of the exciting yet challenging world of AI startups. By sharing experiences of successful entrepreneurs, revealing funding opportunities, and forecasting potential hurdles, we aim to provide invaluable insights for those poised to revolutionize the AI industry.</p>

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
                                <h3>Keynote: Unveiling the Market Dynamics of Generative AI</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 10:00AM - 10:30AM</li>
                                    {/* <li><i className="icofont-user-suited"></i> Speaker Name</li> */}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            <p>Gain insights into the current state and future trajectory of the generative AI industry, understanding key market dynamics, applications, and opportunities.</p>

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
                                <h3>Tea Break</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 10:30AM - 10:45AM</li>
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
                                <h3>Keynote: Overcoming Security, Privacy, and Safety Concerns</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 10:45AM - 11:15AM</li>
                                    {/* <li><i className="icofont-user-suited"></i> Speaker Name</li> */}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            <p>Discover solutions to mitigate the risks associated with AI, focusing on enhancing privacy, security, and building robust AI systems.</p>

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
                                <h3>Keynote: Exploring Foundation Models and Large Language Models</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 11:15AM - 11:45AM</li>
                                    {/* <li><i className="icofont-user-suited"></i> Speaker Name</li> */}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            <p>Dive deep into the world of foundation models and large language models (LLMs), exploring their advancements, challenges, and critical role in shaping the future of generative AI.</p>

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
                                <h3>Lunch</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 11:45AM - 1:45PM</li>
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
                                <h3>Panel: Scrutinizing Large Language Models with Academic Lens</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 1:45PM - 2:30PM</li>
                                    {/* <li><i className="icofont-user-suited"></i> Jeremiah Ouyang, CC Gong@cerebreal VC</li> */}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            <p>Join esteemed scholars and professors as they delve into the academic intricacies of large language models, exploring their underlying mechanisms, capabilities, limitations, and potential for future advancements.</p>

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
                                <h3>Panel: Open vs. Closed - The Dichotomy of Source Models in AI</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 2:30PM - 3:15PM </li>
                                    {/* <li><i className="icofont-user-suited"></i> Jerry Liu@Llama Index </li> */}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            <p>Engage in an intriguing discussion dissecting the benefits, challenges, and implications of open-source and closed-source models in AI, seeking the balance between collaboration, innovation, and intellectual property.</p>

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
                                <h3>Panel: Tech Stacks Powering LLM Deployment</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 3:15PM - 4:00PM</li>
                                    {/* <li><i className="icofont-user-suited"></i> Panel guest name </li> */}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            <p> Unpack the technical complexities of deploying large language models. Experts will discuss tools like LangChain, LLAMA Index, Vector DB, and other essential components that are driving successful utilization of these models.</p>
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
                                <h3>Panel: The VC Perspective on Generative AI Investment</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 4:00PM - 4:45PM </li>
                                    {/* <li><i className="icofont-user-suited"></i> Panel guest name </li> */}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            <p>Get exclusive insights from prominent venture capitalists on the exciting world of Generative AI investment, uncovering trends, risks, potential returns, and the keys to successful AI start-ups.</p>

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
                                <h3>Pitch Round 1</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 5:00PM-6:30PM </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            <p>In this electrifying pitch round, witness startups that are pushing the boundaries of Generative AI present their groundbreaking solutions. They will battle it out to impress a panel of seasoned investors, each striving to demonstrate their innovation's market potential, scalability, and societal impact.</p>

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
                                <h3>Pitch Round 2</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 7:30PM-9:30PM </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            <p>Step into a world where AI meets industry needs. Emerging startups will showcase their AI-driven solutions tailored to disrupt various sectors, from healthcare to finance. This pitch round will evaluate the potential of these enterprises to drive industry transformation, offering a thrilling glimpse into the future of business.</p>

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