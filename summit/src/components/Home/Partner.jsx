import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlatinumSponsors from '../LaxButton/PlatinumSponsors';
import GoldSponsors from '../LaxButton/GoldSponsors';
import DiamondSponsors from '../LaxButton/DiamondSponsors';
import SilverSponsors from '../LaxButton/SilverSponsors';
import LaxDiv from '../Shared/LaxDiv';

const Partner = () => {
    return (
        <section className="partner-area ptb-120">
            <div className="container">
                <div className="section-title">
                    <span>Check Who Makes This Event Possible!</span>
                    <h2>Our Event Sponsors</h2>
                    <LaxDiv text="Sponsors" dataPreset="driftRight" />
                    <a href="https://www.gptdao.ai/get-started" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Become Our Sponsor</a>
                </div>
                
                <div className="row">
                    <div className="partner-title platinum-sponsor">
                        <PlatinumSponsors />
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="partner-item">
                            <Link to="/sponsors" target="_blank">
                                <img src={require("../../assets/images/platinum-partner1.png")} alt="Partner Logo" />
                                <img src={require("../../assets/images/platinum-partner1.png")} alt="Partner Logo" />
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3">
                        <div className="partner-item">
                            <Link to="/sponsors" target="_blank">
                                <img src={require("../../assets/images/platinum-partner2.png")} alt="Partner Logo" />
                                <img src={require("../../assets/images/platinum-partner2.png")} alt="Partner Logo" />
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3">
                        <div className="partner-item">
                            <Link to="/sponsors" target="_blank">
                                <img src={require("../../assets/images/platinum-partner3.png")} alt="Partner Logo" />
                                <img src={require("../../assets/images/platinum-partner3.png")} alt="Partner Logo" />
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3">
                        <div className="partner-item">
                            <Link to="/sponsors" target="_blank">
                                <img src={require("../../assets/images/platinum-partner4.png")} alt="Partner Logo" />
                                <img src={require("../../assets/images/platinum-partner4.png")} alt="Partner Logo" />
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="border"></div>
                    </div>

                    <div className="partner-title gold-sponsor">
                        <DiamondSponsors />
                    </div>

                    <div className="col-lg-3 col-md-3">
                        <div className="partner-item">
                            <Link to="/sponsors" target="_blank">
                                <img src={require("../../assets/images/gold-partner1.png")} alt="Partner Logo" />
                                <img src={require("../../assets/images/gold-partner1.png")} alt="Partner Logo" />
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3">
                        <div className="partner-item">
                            <Link to="/sponsors" target="_blank">
                                <img src={require("../../assets/images/gold-partner2.png")} alt="Partner Logo" />
                                <img src={require("../../assets/images/gold-partner2.png")} alt="Partner Logo" />
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3">
                        <div className="partner-item">
                            <Link to="/sponsors" target="_blank">
                                <img src={require("../../assets/images/gold-partner3.png")} alt="Partner Logo" />
                                <img src={require("../../assets/images/gold-partner3.png")} alt="Partner Logo" />
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3">
                        <div className="partner-item">
                            <Link to="/sponsors" target="_blank">
                                <img src={require("../../assets/images/gold-partner4.png")} alt="Partner Logo" />
                                <img src={require("../../assets/images/gold-partner4.png")} alt="Partner Logo" />
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="border"></div>
                    </div>

                    <div className="partner-title platinum-sponsor">
                        <GoldSponsors />
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="partner-item">
                            <Link to="/sponsors" target="_blank">
                                <img src={require("../../assets/images/platinum-partner1.png")} alt="Partner Logo" />
                                <img src={require("../../assets/images/platinum-partner1.png")} alt="Partner Logo" />
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3">
                        <div className="partner-item">
                            <Link to="/sponsors" target="_blank">
                                <img src={require("../../assets/images/platinum-partner2.png")} alt="Partner Logo" />
                                <img src={require("../../assets/images/platinum-partner2.png")} alt="Partner Logo" />
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3">
                        <div className="partner-item">
                            <Link to="/sponsors" target="_blank">
                                <img src={require("../../assets/images/platinum-partner3.png")} alt="Partner Logo" />
                                <img src={require("../../assets/images/platinum-partner3.png")} alt="Partner Logo" />
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3">
                        <div className="partner-item">
                            <Link to="/sponsors" target="_blank">
                                <img src={require("../../assets/images/platinum-partner4.png")} alt="Partner Logo" />
                                <img src={require("../../assets/images/platinum-partner4.png")} alt="Partner Logo" />
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="border"></div>
                    </div>

                    <div className="partner-title gold-sponsor">
                        <SilverSponsors />
                    </div>

                    <div className="col-lg-3 col-md-3">
                        <div className="partner-item">
                            <Link to="/sponsors" target="_blank">
                                <img src={require("../../assets/images/gold-partner1.png")} alt="Partner Logo" />
                                <img src={require("../../assets/images/gold-partner1.png")} alt="Partner Logo" />
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3">
                        <div className="partner-item">
                            <Link to="/sponsors" target="_blank">
                                <img src={require("../../assets/images/gold-partner2.png")} alt="Partner Logo" />
                                <img src={require("../../assets/images/gold-partner2.png")} alt="Partner Logo" />
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3">
                        <div className="partner-item">
                            <Link to="/sponsors" target="_blank">
                                <img src={require("../../assets/images/gold-partner3.png")} alt="Partner Logo" />
                                <img src={require("../../assets/images/gold-partner3.png")} alt="Partner Logo" />
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3">
                        <div className="partner-item">
                            <Link to="/sponsors" target="_blank">
                                <img src={require("../../assets/images/gold-partner4.png")} alt="Partner Logo" />
                                <img src={require("../../assets/images/gold-partner4.png")} alt="Partner Logo" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Partner;