import React from 'react';
import { Link } from 'react-router-dom';
// import lax from 'lax.js';
import PlatinumSponsors from '../LaxButton/PlatinumSponsors';
import GoldSponsors from '../LaxButton/GoldSponsors';
import Footer from '../Common/Footer';
import SponsorPackage from '../Home/SponsorPackage';

const SponsorsPage = () => {
    return (
    <>
        <div className="page-title-area item-bg1">
            <div className="container">
                <h1>Sponsors</h1>
            </div>
        </div>

        <section className="partner-area ptb-120">
            <div className="container">

            <div className="partner-title platinum-sponsor">
                    <PlatinumSponsors />
                </div>
                <div className="row">
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
                        <GoldSponsors />
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
        <SponsorPackage />
        <Footer />
    </>
);
}

export default SponsorsPage;