import React from 'react';
 
const EventSchedules = () => {
    return (
        <div className="tab_content">
            <div id="tab1" className="tabs_item">
                <ul className="accordion">
                    <li className="accordion-item">
                        <div className="accordion-title">
                            <div className="schedule-info">
                                <h3>Keynote 1: Dr. Ameer Haj-Ali (Head of Cloud Infrastructure & Platform Engineering @Anyscale)</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 8:30AM - 9:00AM</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            {/* <p>content TBD</p> */}

                            <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-7">
                                    <div className="location">
                                        <b>Topic:</b> Scaling LLM Applications with Ray and Anyscale
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion-item">
                        <div className="accordion-title">
                            <div className="schedule-info">
                                <h3>Keynote 2: Jason Lopatecki (Founder & CEO @Arize AI)</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 9:00AM - 9:30AM</li>
                                    {/* <li><i className="icofont-user-suited"></i> Speaker Name</li> */}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            {/* <p>content TBD</p> */}

                            <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-7">
                                    <div className="location">
                                        <b>Topic:</b> Applied LLM Evaluations in Production
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion-item">
                        <div className="accordion-title">
                            <div className="schedule-info">
                                <h3>Keynote 3: Yangqing Jia (Founder @Lepton AI)</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 9:30AM - 10:00AM</li>
                                    {/* <li><i className="icofont-user-suited"></i> Speaker Name</li> */}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            

                            <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-7">
                                    <div className="location">
                                        {/* <b>Topic:</b> Building Performant RAG Applications for Production */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="accordion-item">
                        <div className="accordion-title">
                            <div className="schedule-info">
                                <h3>Keynote 4: Rajat Suri
(Co-Founder @Lima, 
Founder @Presto, 
Co-Founder @Lyft)
                                    </h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 10:00AM - 10:30AM</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                           

                           <div className="row h-100 align-items-center">
                               <div className="col-lg-6 col-md-7">
                                   <div className="location">
                                       <b>Topic:</b> Scaling AI Companies
                                   </div>
                               </div>
                           </div>
                       </div>
                    </li>

                    <li className="accordion-item">
                        <div className="accordion-title">
                            <div className="schedule-info">
                                <h3>Time Flexibility</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 10:30AM - 11:00AM</li>
                                    {/* <li><i className="icofont-user-suited"></i> Speaker Name</li> */}
                                </ul>
                            </div>
                        </div>
                        
                       
                    </li>

                    <li className="accordion-item">
                        <div className="accordion-title">
                            <div className="schedule-info">
                                <h3>Keynote 5: Jay Alammar (Director, Engineering Fellow @Cohere)</h3>

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
                                <h3>Keynote 6: Anton Troynikov (Founder @Chroma)</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 11:30AM - 12:00pm</li>
                                    {/* <li><i className="icofont-user-suited"></i> Speaker Name</li> */}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                         

                            <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-7">
                                    <div className="location">
                                        <b>Topic:</b> Memory for AI
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
                                <h3>Panel 1: Scrutinizing LLM with Academic Lens</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 1:00PM - 2:00PM</li>
                                    {/* <li><i className="icofont-user-suited"></i> Jeremiah Ouyang, CC Gong@cerebreal VC</li> */}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">

                            <p>Karina Nguyen (AI Researcher @Anthropic), Jason Wei (AI Researcher @OpenAI), Chunting Zhou (Research Scientist @Meta AI), Xinyun Chen (Senior Scientist @DeepMind)</p>

                    

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
                                <h3>Panel 2:  K12 AI Initiative (with 50 high school students)</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 2:00PM - 3:00PM </li>
                                    {/* <li><i className="icofont-user-suited"></i> Jerry Liu@Llama Index </li> */}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            <p>
Student Ambassadors, 
Harrison Chase (Founder & CEO @LangChain), 
Jason Wei (AI Researcher @OpenAI), 
Jerry Liu (Cofounder & CEO @LlamaIndex)
</p>


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
                                <h3>Pitches</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 3:00PM - 3:30PM</li>
                                    {/* <li><i className="icofont-user-suited"></i> Panel guest name </li> */}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            <p> Project 1 <br></br>
Project 2 
                            </p>
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
                                <h3>Pitches</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 3:30PM - 4:00PM </li>
                                    {/* <li><i className="icofont-user-suited"></i> Panel guest name </li> */}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            <p>Project 1<br></br>
Project 2</p>

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
                                <h3>Panel 3: MLOps and scaling LLM apps</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 4:00PM - 5:00PM </li>
                                    {/* <li><i className="icofont-user-suited"></i> Panel guest name </li> */}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            <p>
Dr. Ameer Haj-Ali (Head of Cloud Infrastructure & Platform Engineering @Anyscale), 
Yun Jin (Engineering Director @Meta)
Hanyu Xue (Principle ML Engineering Manager @Microsoft), 
Rohit Agarwal (CEO of Portkey), 
Tiger Feng (President @Seattle Technical Forum)</p>

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
                                <h3>Pitches</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 5:00PM - 5:30PM </li>
                                    {/* <li><i className="icofont-user-suited"></i> Panel guest name </li> */}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            <p>Project 1<br></br>
Project 2</p>

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
                                <h3>Pitches</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 5:30PM - 6:00PM </li>
                                    {/* <li><i className="icofont-user-suited"></i> Panel guest name </li> */}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            <p>Project 1<br></br>
Project 2</p>

                            {/* <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-7">
                                    <div className="location">
                                        <b>Location:</b> Room D, Santa Clara Conventin Ceneter
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