import React from 'react';
import { Link } from 'react-router-dom';
import { SiLinktree } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Summit Information</h3>
                            <span>
                                <i className="icofont-calendar"></i> May 27 - 31, 2024
                            </span>

                            <p className="location">
                                <i className="icofont-google-map"></i> 3601 Lyon St, San Francisco, CA 94123
                            </p>
                            

                            <p className="location">
                                <i className="icofont-email"></i> genaix@gptdao.ai
                            </p>
                            
                            <a href="https://linktr.ee/gptdao" target="_blank" rel="noopener noreferrer" className="contact-authority">
                                <i className="icofont-phone"></i> Contact Us
                            </a>

                            
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Contact Us</h3>
                            <p>We sincerely invite you to join us, bring your creativity and ideals, and explore the future of generative AI together. Please contact us for more information about the Generative AI Summit San Francisco 2024.</p>
                            
                            <ul className="social-links">
                                <li>
                                    <Link to="https://linktr.ee/gptdao" className="twitter" target="_blank">
                                       <SiLinktree />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://twitter.com/GPTDAOGLOBAL" className="twitter" target="_blank">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.linkedin.com/company/gptdao" className="linkedin" target="_blank">
                                        <i className="icofont-linkedin"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.gptdao.ai/" className="facebook" target="_blank">
                                        <i className="icofont-web"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="copyright-area">
                            <p>
                                Copyright <i className="icofont-copyright"></i> 2024 GPTDAO. All rights reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;