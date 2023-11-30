import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlatinumSponsors from '../LaxButton/PlatinumSponsors';
import GoldSponsors from '../LaxButton/GoldSponsors';
import DiamondSponsors from '../LaxButton/DiamondSponsors';
import SilverSponsors from '../LaxButton/SilverSponsors';
import BoothSponsors from '../LaxButton/BoothSponsors';
import LaxDiv from '../Shared/LaxDiv';
import { booths } from './boothsData';


//this contains partners (sponsors) and Booth information
const Partner = () => {
    return (
        <section className="partner-area ptb-120">
            <div className="container">
                <div className="section-title">
                    <span>Check Who Makes This Event Possible!</span>
                    <h2>Previous Sponsors</h2>
                    {/* <h4>(From "<a href="https://sv2023.genaisummit.xyz/" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }} >GenAI Summit 2023</a>")</h4>
                    
                    <p>and GenAI Cloud Computing Collaborators</p> */}
                    <LaxDiv text="Sponsors" dataPreset="driftRight" />
                    {/* <a href="https://www.gptdao.ai/get-started" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Become Our Sponsor</a> */}
                </div>
                
                
                <div className="row">
                    <div className="col-lg-3 col-md-3 sponsor-div">
                        {/* <div className="partner-title">
                        <img src={require("../../assets/images/sponsors/diamond.png")} alt="Partner Logo" />
                        </div> */}
                        <div className="sponsor-logo">
                            <img src={require("../../assets/images/sponsors/microsoft.png")} alt="Partner Logo" />
                        </div>
                    </div>

                    {/* <div className="col-lg-3 col-md-3 sponsor-div">
                        <div className="partner-title">
                        <img src={require("../../assets/images/sponsors/plat.png")} alt="Partner Logo" />
                        </div>
                        <div className="sponsor-logo">
                            <img src={require("../../assets/images/sponsors/aws.png")} alt="Partner Logo" />
                            <img src={require("../../assets/images/sponsors/googlecloud.png")} alt="Partner Logo"/>
                            <img src={require("../../assets/images/sponsors/dawn.png")} alt="Partner Logo"/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 sponsor-div">
                        <div className="partner-title">
                        <img src={require("../../assets/images/sponsors/gold.png")} alt="Partner Logo" />
                        </div>
                        <div className="sponsor-logo">
                            <img src={require("../../assets/images/sponsors/yiren.png")} alt="Partner Logo" />
                            <img src={require("../../assets/images/sponsors/swft.png")} alt="Partner Logo" id="big"/>
                            <img src={require("../../assets/images/sponsors/wagmi.png")} alt="Partner Logo" />
                            <img src={require("../../assets/images/sponsors/realloop.png")} alt="Partner Logo" id="big"/>
                        </div>
                    </div> */}

                    <div className="col-lg-3 col-md-3 sponsor-div">
                        {/* <div className="partner-title">
                        <img src={require("../../assets/images/sponsors/silver.png")} alt="Partner Logo" />
                        </div> */}
                        <div className="sponsor-logo">
                            {/* <img src={require("../../assets/images/sponsors/espeedlogo.png")} alt="Partner Logo" id="big" />
                            <img src={require("../../assets/images/sponsors/onecarmel.png")} alt="Partner Logo" id="big"/>
                            <img src={require("../../assets/images/sponsors/metasponser.png")} alt="Partner Logo" /> */}
                            <img src={require("../../assets/images/sponsors/tencent.png")} alt="Partner Logo" />
                            <img src={require("../../assets/images/sponsors/backk1.png")} alt="Partner Logo" />
                            <img src={require("../../assets/images/sponsors/backk1.png")} alt="Partner Logo" />
                           
                        </div>
                        <div>

                            
                        </div>
                        
                    </div>
                    
                </div> 
                {/* stops here, starts from here, it is booth information*/}
                

                <div className="section-title">
                    
                    <LaxDiv text="Exhibits" dataPreset="DriftRight" />
                        <span>Showcase your product to everyone at the Summit!</span>
                        
                        <h2>Previous Exhibits</h2>
                        
                        
                    

                    
                </div>
                
                <div className="row">
                    
                    {/* <div className="mb-5 col-0"> mb-5控制行距 */} 
                    <div className="col-0">
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
            
            {/* <div className="col-lg-3 col-md-3 sponsor-div"> */}
            
        </section>
  );
}
 
export default Partner;
