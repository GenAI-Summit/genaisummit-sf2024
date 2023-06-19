import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import lax from 'lax.js';
import LaxDiv from '../Shared/LaxDiv';

const EventSchedules = () => {

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

    const openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

        return (
            <section className="schedule-area bg-image ptb-120">
                <div className="container">
                    <div className="section-title">
                        <span>All the wonderfulness</span>
                        <h2>Summit Events</h2>

                        <LaxDiv text="Events" dataPreset="driftLeft" />

                        {/* <div className="bar"></div> */}
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tab">
                                <ul className="tabs active">
                                    <li
                                        onClick={(e) => openTabSection(e, 'tab1')}
                                        className="current"
                                    >
                                        <Link to="#">
                                            Keynotes
                                            {/* <span>10</span> */}
                                        </Link>
                                    </li>

                                    <li onClick={(e) => openTabSection(e, 'tab2')}>
                                        <Link to="#">
                                            Panels
                                        </Link>
                                    </li>

                                    <li onClick={(e) => openTabSection(e, 'tab3')}>
                                        <Link to="#">
                                            Social
                                        </Link>
                                    </li>

                                    <li onClick={(e) => openTabSection(e, 'tab4')}>
                                        <Link to="#">
                                            After Party
                                        </Link> 
                                    </li>
                                </ul>

                                <div className="tab_content">
                                    <div id="tab1" className="tabs_item">
                                        <ul className="accordion">
                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author">
                                                        <img 
                                                            src={require("../../assets/images/author1.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Smith" 
                                                            alt="Author" 
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Exploring the Frontiers of Generative AI: Innovations and Implications</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>Sam Altman</span> CEO of OpenAI</li>
                                                            <li><i className="icofont-wall-clock"></i> 9:00AM - 10:00AM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 121, Building C/A , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author author-multi">
                                                        <img 
                                                            src={require("../../assets/images/author5.jpg")} 
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Lucy" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author2.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Jonaton Smith" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author3.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Smith" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author4.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Doe" 
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Generative AI Ethics: Navigating the Challenges of Responsible AI Development</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>Kate Crawford</span> of AI Now Institute  (Senior Principal Researcher)</li>
                                                            <li><i className="icofont-wall-clock"></i> 12:00PM - 13:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 132, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author author-multi">
                                                        <img 
                                                            src={require("../../assets/images/author6.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Lucy" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author7.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Jonaton Smith" 
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Applications of Generative AI in Visual Arts and Entertainment</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>Refik Anadol</span> Independent Artist and Creative Technologist </li>
                                                            <li><i className="icofont-wall-clock"></i> 1:00PM - 2:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author author-multi">
                                                        <img 
                                                            src={require("../../assets/images/author8.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Lucy" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author9.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Jonaton Smith" 
                                                            alt="Author" 
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author3.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Smith" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author4.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Doe" 
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Generative AI and the Future of Human-Machine Collaboration</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>Ian Goodfellow</span> of Apple (Director of Machine Learning in the Special Projects Group)</li>
                                                            <li><i className="icofont-wall-clock"></i> 13:00AM - 20:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>	
                                    </div>

                                    <div id="tab2" className="tabs_item">
                                    </div>

                                    <div id="tab3" className="tabs_item">
                                    </div>

                                    <div id="tab4" className="tabs_item">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
}
 
export default EventSchedules;