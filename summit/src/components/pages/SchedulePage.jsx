import React from 'react'
import MainBanner from '../schedule/MainBanner';
import Events from '../schedule/Events';
import Footer from '../Common/Footer';
import { Link } from 'react-router-dom';

const SchedulePage = () => {
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
        <>
            <MainBanner />
            <section className="schedule-area bg-image ptb-120">
                <div className="container">
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
            <Footer />
        </>
    );
}
 
export default SchedulePage;