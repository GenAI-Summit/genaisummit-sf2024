import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlatinumSponsors from '../LaxButton/PlatinumSponsors';
import GoldSponsors from '../LaxButton/GoldSponsors';
import DiamondSponsors from '../LaxButton/DiamondSponsors';
import SilverSponsors from '../LaxButton/SilverSponsors';
import BoothSponsors from '../LaxButton/BoothSponsors';
import LaxDiv from '../Shared/LaxDiv';
import { booths } from './boothsData';

const Partner = () => {
    return (
        <section className="partner-area ptb-120">
            <div className="container">
                <div className="section-title">
                    <span>Check Who Makes This Event Possible!</span>
                    <h2>Event Sponsors</h2>
                    <p>and GenAI Cloud Computing Collaborators</p>
                    <LaxDiv text="Sponsors" dataPreset="driftRight" />
                    <a href="https://www.gptdao.ai/get-started" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Become Our Sponsor</a>
                </div>
                
                <div className="row">
                    <div className="col-lg-3 col-md-3 sponsor-div">
                        <div className="partner-title">
                            <DiamondSponsors />
                        </div>
                        <div className="sponsor-logo">
                            <img src={require("../../assets/images/sponsors/microsoft.png")} alt="Partner Logo" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 sponsor-div">
                        <div className="partner-title">
                            <PlatinumSponsors />
                        </div>
                        <div className="sponsor-logo">
                            <img src={require("../../assets/images/sponsors/aws.png")} alt="Partner Logo" />
                            <img src={require("../../assets/images/sponsors/googlecloud.png")} alt="Partner Logo"/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 sponsor-div">
                        <div className="partner-title">
                            <GoldSponsors />
                        </div>
                        <div className="sponsor-logo">
                            <img src={require("../../assets/images/sponsors/iobc.jpeg")} alt="Partner Logo" />
                            <img src={require("../../assets/images/sponsors/tencent.png")} alt="Partner Logo" />
                            <img src={require("../../assets/images/sponsors/swft.png")} alt="Partner Logo" id="big"/>
                            <img src={require("../../assets/images/sponsors/wagmi.png")} alt="Partner Logo" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 sponsor-div">
                        <div className="partner-title">
                            <SilverSponsors />
                        </div>
                        <div className="sponsor-logo">
                            <img src={require("../../assets/images/sponsors/nftpath.png")} alt="Partner Logo" />
                            <img src={require("../../assets/images/sponsors/espeedlogo.jpg")} alt="Partner Logo" />
                            <img src={require("../../assets/images/sponsors/onecarmel.png")} alt="Partner Logo" />
                            <img src={require("../../assets/images/sponsors/metasponser.png")} alt="Partner Logo" />
                        </div>
                    </div>
                </div>

                <div className='row'> 
                    <div className="partner-title">
                        <BoothSponsors />
                    </div>
                    {booths.map((booth, index) => (
                        <div className="col-lg-2 col-md-2 sponsor-div">
                            <div className="sponsor-logo" key={index}>
                                    <img src={booth.image} alt={booth.name} className="img-fluid" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
 
export default Partner;
