import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import PlatinumSponsors from '../LaxButton/PlatinumSponsors';
// import GoldSponsors from '../LaxButton/GoldSponsors';
// import DiamondSponsors from '../LaxButton/DiamondSponsors';
// import SilverSponsors from '../LaxButton/SilverSponsors';
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
                    <h2>Sponsors</h2>
                    {/* <h4>(From "<a href="https://sv2023.genaisummit.xyz/" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }} >GenAI Summit 2023</a>")</h4>
                    
                    <p>and GenAI Cloud Computing Collaborators</p> */}
                    <LaxDiv text="Sponsors" dataPreset="driftRight" />
                    <a href="https://www.gptdao.ai/get-started" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Become Our Sponsor</a>
                </div>
                
                
                <div className="row">
                    <div className="col-lg-3 col-md-3 sponsor-div">
                        {/* <div className="partner-title">
                        <img src={require("../../assets/images/sponsors/diamond.png")} alt="Partner Logo" />
                        </div> */}
                        <div className="sponsor-logo">
                            <br></br>
                        <img src={require("../../assets/images/sponsors/googlecloud.png")} alt="Partner Logo" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 sponsor-div">
                        {/* <div className="partner-title">
                        <img src={require("../../assets/images/sponsors/plat.png")} alt="Partner Logo" />
                        </div> */}
                        <div className="sponsor-logo">
                            {/* <img src={require("../../assets/images/sponsors/aws.png")} alt="Partner Logo" />
                            <img src={require("../../assets/images/sponsors/googlecloud.png")} alt="Partner Logo"/>
                            <img src={require("../../assets/images/sponsors/dawn.png")} alt="Partner Logo"/> */}
                            <br></br>
                            <img src={require("../../assets/images/sponsors/aws2.png")} alt="Partner Logo"/>
                            <img src={require("../../assets/images/sponsors/backk1.png")} alt="Partner Logo" />
                            {/* <img src={require("../../assets/images/sponsors/tencent.png")} alt="Partner Logo" /> */}
                        </div>
                    </div>

                    {/* <div className="col-lg-3 col-md-3 sponsor-div">
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
                            
                            
                            <br/>
                            
                           
                            
                           
                        </div>
                        <div>

                            
                        </div>
                        
                    </div>
                    
                </div> 





                {/* stops here, starts from here, it is booth information*/}
                {/* booth information starts */}

                <div className="section-title">
                    
                    <LaxDiv text="Exhibits" dataPreset="DriftRight" />
                        <span>Showcase your product to everyone at the Summit!</span>
                        
                        <h2> <b>Exhibition</b> Opportunites</h2>
                        
                        <a href="https://www.gptdao.ai/get-started" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Take your place to exhibit</a>

                    
                </div>
                
                <div className="container">
                    <div className="row h-100 align-items-center">
                    <h4>Located in the exhibition hall, the Booth allows you to conduct
meetings while ensuring optimal brand exposure. Brand's logo will be
featured on signage throughout the venue, displayed on website and
brochures.</h4>

                        <div className="col-lg-6">
                            <div className="about-content">
                       
                            <br/>
                    
                        
                                <h4>Booth Type A </h4><p>10ft x 10 ft (3m x 3m)</p>
                                <h5>USD 9,999 (Early Bird)</h5>
                                <p>• 10 x 10 ft Space Turnkey Solution<br></br>
                                •  1x Round Table<br></br>
                                • 3x Bar Stool Chairs<br></br>
                                • 6x Back Walls Available for Posters or Designs<br></br> 
                                (3.28ft x 7.87ft or 1m x 2.4m)<br></br>
                                • Customer Curved Counter with Doors for Storage<br></br>
                                • 3x Event Tickets</p>
                                

                            </div>
                                        
                        </div>
                            
                            
                        <div className="col-lg-6">
                            <div>
                               
                               
                                
                                <img
                                    src={require("../../assets/images/imagewhite.png")}
                                    className="about-img1" 
                                    alt="about" 
                                />
                            </div>
                                <div>
                                <br/>
                                
                                <img
                                    src={require("../../assets/images/booth3x3.png")}
                                    className="about-img1" 
                                    alt="about" 
                                />
                                <p>(Images are for illustrative purposes only, actual product may vary)</p>
                            </div>
                            
                        </div>

                        
                        
                        
                    </div>
                </div>   

                <div className="container">
                    <div className="row h-100 align-items-center">
                   
                    <div className="col-lg-6">
                            <div>
                               
                               
                                
                                <img
                                    src={require("../../assets/images/imagewhite.png")}
                                    className="about-img1" 
                                    alt="about" 
                                />
                            </div>
                                <div>
                                <br/>
                                
                                <img
                                    src={require("../../assets/images/booth2x2.png")}
                                    className="about-img1" 
                                    alt="about" 
                                />
                                <p>(Images are for illustrative purposes only, actual product may vary)</p>
                            </div>
                            
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                       
                            <br/>
                    
                        
                                <h4>Booth Type B </h4><p>6.5ft x 6.5 ft (2m x 2m)</p>
                                <h5>USD 6,999 (Early Bird)</h5>
                                <p>
                                • 6.5 x 6.5 ft Space Turnkey Solution<br></br>
                                • 1x Round Table<br></br>
                                • 3x Bar Stool Chairs<br></br>
                                • 4x Back Walls Available for Posters or Designs<br></br> 
                                (3.28ft x 7.87ft or 1m x 2.4m)<br></br>
                                • Customer Curved Counter with Doors for Storage<br></br>
                                • 2x Event Tickets</p>
                                

                            </div>
                                        
                        </div>
                            
                        
                    </div>
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

                <div className="container">
                    <div className="row h-100 align-items-center">
                        

                        <div className="col-lg-6">
                            <div className="about-content">
                                <span>Stay with the Community</span>
                                <h2> <b>Certificate</b> of Recognition</h2>
                                {/* <p>Networking Galore: Rub shoulders with the best minds in the AI realm, form invaluable connections, and usher in collaborative innovation.
                                Hear from the stars of the industry as they deliver keynote speeches that promise to enlighten and inspire. Engage with these visionaries during interactive sessions, 
                                where you can ask your burning questions and gain invaluable insights. 
                                The GenAI Summit 2024 isn't just an event; it's where the future of AI becomes your present. 
                                Join us to be part of molding the tech landscape of tomorrow.
                                </p> */}
                                <h4>GPTDAO was presented to Certificate of Recognition by City of Saratoga on September 23, 2023.</h4>
                                
                                <p>Here at GenAI Summit, we engage with our community and collaborate with local residents. Our commitment to promoting and advancing artificial intelligence is a journey we proudly share with the local community. We look forward to fostering further innovation and shared success in the future.</p>

                                        </div>
                                        
                            </div>
                            
                            
                            <div className="col-lg-6">
                            <div>
                               
                               
                                
                                <img
                                    src={require("../../assets/images/imagewhite.png")}
                                    className="about-img1" 
                                    alt="about" 
                                />
                            </div>
                                <div>
                                <br/>
                                <br/>
                                
                                <img
                                    src={require("../../assets/images/certificate.png")}
                                    className="about-img1" 
                                    alt="about" 
                                />
                            </div>
                            
                        </div>

                        
                        
                        
                    </div>
                </div>   

                    
                
            </div>
            
            {/* <div className="col-lg-3 col-md-3 sponsor-div"> */}
            
        </section>
  );
}
 
export default Partner;
