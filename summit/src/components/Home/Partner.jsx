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
                    <div className="partner-title">
                        <DiamondSponsors />
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="partner-item">
                            <img src={require("../../assets/images/awslogo.png")} alt="Partner Logo" />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="border"></div>
                    </div>

                    <div className="partner-title">
                        <PlatinumSponsors />
                    </div>

                    <div className="col-lg-3 col-md-3">
                        <div className="partner-item">
                            <img src={require("../../assets/images/googlecloudlogo.png")} alt="Partner Logo" />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="border"></div>
                    </div>

                    <div className="partner-title">
                        <GoldSponsors />
                    </div>

                    <div className="col-lg-3 col-md-3">
                        <div className="partner-item">
                            <img src={require("../../assets/images/wagmi33logo.webp")} alt="Partner Logo" />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="border"></div>
                    </div>

                    <div className="partner-title">
                        <SilverSponsors />
                    </div>

                    <div className="col-lg-3 col-md-3">
                        <div className="partner-item">
                            <img src={require("../../assets/images/espeedcapitallogo.jpeg")} alt="Partner Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Partner;