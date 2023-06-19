import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import lax from 'lax.js';
import LaxDiv from '../Shared/LaxDiv';
import Events from '../schedule/Events';

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
                        <span>20+ events covering 10 topics</span>
                        <h2>Summit Events</h2>

                        <LaxDiv text="Events" dataPreset="driftLeft" />
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
                                            Morning
                                        </Link>
                                    </li>

                                    <li onClick={(e) => openTabSection(e, 'tab2')}>
                                        <Link to="#">
                                            Afternoon
                                        </Link>
                                    </li>
                                </ul>

                                <Events />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
}
 
export default EventSchedules;