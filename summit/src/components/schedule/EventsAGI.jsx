import React from 'react';
 
const EventSchedules = () => {
    return (
        <div className="tab_content">
            <div id="tab1" className="tabs_item">
                <ul className="accordion">
                    <li className="accordion-item">
                        <div className="accordion-title">
                            <div className="schedule-info">
                                <h3>Day 1: The Genesis of Generative AI</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 29th May, 2024</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            <h6>1. Keynotes from industry stalwarts</h6> <br></br>
                            <h6>2. Panel discussions on ethical AI</h6> <br></br>
                            <h6>3. Hands-on workshops on generative techniques</h6>

                            {/* <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-7">
                                    <div className="location">
                                        <b>Location:</b> 
                                        Main Entrance, Santa Clara Conventin Ceneter
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </li>

                    <li className="accordion-item">
                        <div className="accordion-title">
                            <div className="schedule-info">
                                <h3>Day 2: AI in Action</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 30th May, 2024</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            <h6>1. Live demonstrations of generative AI applications</h6> <br></br>
                            <h6>2. Breakout sessions on sector-specific AI applications</h6> <br></br>
                            <h6>3. Networking cocktail hour</h6>

                            {/* <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-7">
                                    <div className="location">
                                        <b>Location:</b> 
                                        Main Entrance, Santa Clara Conventin Ceneter
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </li>


                    <li className="accordion-item">
                        <div className="accordion-title">
                            <div className="schedule-info">
                                <h3>Day 3: The Horizon Ahead</h3>

                                <ul>
                                    <li><i className="icofont-wall-clock"></i> 31th May, 2024</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="accordion-content">
                            <h6>1. Future-gazing panels on the long-term impact of AI</h6> <br></br>
                            <h6>2. Closing keynote: "The Next Decade in AI"</h6> <br></br>
                            <h6>3. GenAI Awards Ceremony</h6>

                            {/* <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-7">
                                    <div className="location">
                                        <b>Location:</b> 
                                        Main Entrance, Santa Clara Conventin Ceneter
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </li>

                    <p>Note: Tentative Agenda, update weekly.</p>

                    

                </ul>	
            </div>
        </div>
        

    );
}
 
export default EventSchedules;