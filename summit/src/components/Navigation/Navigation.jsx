import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/images/gptdao.png';
import { Link as ScrollLink } from 'react-scroll';
import PromoBar from '../../components/Home/PromoBar';

const Navigation = () => {
    const [collapsed, setCollapsed] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    };

    useEffect(() => {
        let elementId = document.getElementById("navbar");
        const scrollListener = () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
                window.history.pushState("", document.title, window.location.pathname);
            } else {
                elementId.classList.remove("is-sticky");
            }
        };
        document.addEventListener("scroll", scrollListener);
        window.scrollTo(0, 0);

        return () => {
            // Cleanup
            document.removeEventListener("scroll", scrollListener);
        };
    }, []);

    const toggleOpen = () => setIsOpen(!isOpen);

    useEffect(() => {
        console.log('OK');
    }, [location]);

    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    const menuClass = `dropdown-menu${isOpen ? " show" : ""}`;

    return (
        <header id="header" className="header-area">
            <div id="navbar" className="elkevent-nav">
{/*                 <PromoBar /> */}
                <nav className="navbar navbar-expand-md navbar-light">
                    <div className="container">
                        <img  className="navbar-brand" src={logo} alt="logo" style={{ height: '50px' }} /> 
                        <h2 className='text-white'>GPTDAO</h2>

                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link 
                                        exact="true" 
                                        to="/" 
                                        onClick={(e) => {
                                            toggleOpen();
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }}
                                        className="nav-link"
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <ScrollLink
                                        activeClass="active"
                                        to="speakers"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        className="scroll-link"
                                    >
                                        Speakers
                                    </ScrollLink>
                                </li>

                                <li className="nav-item">
                                    <ScrollLink 
                                        activeClass="active"
                                        to="sponsors"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        className="scroll-link"
                                    >
                                        Sponsors
                                    </ScrollLink>
                                </li>

                                <li className="nav-item">
                                    <ScrollLink 
                                        activeClass="active"
                                        to="schedule"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        className="scroll-link"
                                    >
                                        Schedule
                                    </ScrollLink>
                                </li>

                                <li className="nav-item">
                                    <a href="https://linktr.ee/gptdao" target="_blank" rel="noopener noreferrer" className="nav-link">Contact</a>
                                </li>

                                <li className="nav-item">
                                    <a href="https://sv2023.genaisummit.xyz/" target="_blank" rel="noopener noreferrer" className="nav-link">Previous Event</a>
                                </li>
                            </ul>

                            <div className="others-option">
                                <ul>
                                    <li>
                                        <a href="" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Tickets Coming Soon</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
 
export default Navigation;
