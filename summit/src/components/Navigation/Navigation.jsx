import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
 
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
                <nav className="navbar navbar-expand-md navbar-light">
                    <div className="container">
                        {/* <Link className="navbar-brand" to="/">
                            <img src={logo} alt="logo" />
                        </Link> */}
                        <h2 className='text-white'>GPTDAO</h2>

                        {/* <button 
                            onClick={toggleNavbar} 
                            className={classTwo}
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" 
                            aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button> */}

                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link 
                                        exact="true" 
                                        to="/" 
                                        onClick={toggleOpen} 
                                        className="nav-link"
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link 
                                        to="#speakers"
                                        className="nav-link"
                                        onClick={toggleOpen}
                                    >
                                        Speakers
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link 
                                        to="#sponsors"
                                        className="nav-link" 
                                        onClick={toggleNavbar}
                                    >
                                        Sponsor
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link 
                                        to="#schedule" 
                                        className="nav-link"
                                        onClick={toggleOpen}
                                    >
                                        Schedule
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <a href="https://www.gptdao.ai/get-started" target="_blank" rel="noopener noreferrer" className="nav-link">Contact</a>
                                </li>
                            </ul>

                            <div className="others-option">
                                <ul>
                                    <li>
                                        <a href="https://www.eventbrite.com/e/generative-ai-silicon-valley-summit-2023-tickets-644622642677" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Buy Tickets</a>
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