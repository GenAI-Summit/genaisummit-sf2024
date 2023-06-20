import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LaxDiv from '../Shared/LaxDiv';

const Speakers = () => {
    return (
        <section className="speakers-area-two ptb-120">
            <div className="container">
                <div className="section-title">
                    <span>Listen to the Event Speakers</span>
                    <h2>Our Speakers</h2>
                    <LaxDiv text="Speakers" dataPreset="driftRight" />
                </div>

                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-speakers-box">
                            <div className="speakers-image">
                                <img 
                                    src={require("../../assets/images/jerryliu.jpg")}
                                    alt="speaker" 
                                />
                            </div>

                            <div className="speakers-content">
                                <h3>Jerry Liu</h3>
                                <span>Co-founder & CEO @Llama Index </span>

                                <ul className="social">
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="https://jerryjliu.github.io/">
                                            <i className="icofont-web"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/jerryjliu0">
                                            <i className="icofont-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jerry-liu-64390071/">
                                            <i className="icofont-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-speakers-box">
                            <div className="speakers-image">
                                <img 
                                    src={require("../../assets/images/ccgong.jpeg")}
                                    alt="speaker" 
                                />
                            </div>

                            <div className="speakers-content">
                                <h3>CC Gong</h3>
                                <span>Founder @Montage</span>

                                <ul className="social">
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/CCgong">
                                            <i className="icofont-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ccxgong/">
                                            <i className="icofont-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-speakers-box">
                            <div className="speakers-image">
                                <img 
                                    src={require("../../assets/images/yangqingjia.jpeg")}
                                    alt="speaker" 
                                />
                            </div>

                            <div className="speakers-content">
                                <h3>Yangqing Jia</h3>
                                <span> VP @AlibabaGroup </span>

                                <ul className="social">
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="https://daggerfs.com/">
                                            <i className="icofont-web"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/jiayq">
                                            <i className="icofont-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/yangqing-jia/">
                                            <i className="icofont-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-speakers-box">
                            <div className="speakers-image">
                                <img 
                                    src={require("../../assets/images/owyang.jpeg")} 
                                    alt="speaker" 
                                />
                            </div>

                            <div className="speakers-content">
                                <h3>Jeremiah Owyang</h3>
                                <span> Founder @Catalyst Companies </span>

                                <ul className="social">
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="https://web-strategist.com/blog/">
                                            <i className="icofont-web"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/jowyang">
                                            <i className="icofont-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jowyang/">
                                            <i className="icofont-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* <div className="col-lg-3 col-sm-6">
                        <div className="single-speakers-box">
                            <div className="speakers-image">
                                <img 
                                    src={require("../../assets/images/speakers5.jpg")}
                                    alt="speaker" 
                                />
                            </div>

                            <div className="speakers-content">
                                <h3>Lima</h3>
                                <span>xxx</span>

                                <ul className="social">
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="">
                                            <i className="icofont-web"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="">
                                            <i className="icofont-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="">
                                            <i className="icofont-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> */}

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-speakers-box">
                            <div className="speakers-content">
                                <h3><Link to="#">More to Come</Link></h3>
                                <span>Accounce Weekly</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Speakers;