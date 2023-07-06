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
                                src={require("../../assets/images/ccgong.jpeg")}
                                alt="speaker" 
                            />
                        </div>

                        <div className="speakers-content">
                            <h3>CC Gong</h3>
                            <span>Co-Founder of Cerebral AI</span>

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
                                src={require("../../assets/images/barthelet.jpeg")}
                                alt="speaker" 
                            />
                        </div>

                        <div className="speakers-content">
                            <h3>Luc Barthelet</h3>
                            <span>CTO of Unity</span>

                            <ul className="social">
                                <li>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lucbarthelet/">
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
                                    src={require("../../assets/images/stevehoffman.jpeg")}
                                    alt="speaker" 
                                />
                            </div>

                            <div className="speakers-content">
                                <h3>Steve Hoffman</h3>
                                <span>Founder & CEO of Founders Space</span>

                                <ul className="social">
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.foundersspace.com/hoffman/">
                                            <i className="icofont-web"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/FoundersSpace">
                                            <i className="icofont-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/foundersspace/">
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
                                <span> VP of AlibabaGroup, ex Meta AI Lead </span>

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
                                    src={require("../../assets/images/jerryliu.jpeg")}
                                    alt="speaker" 
                                />
                            </div>

                            <div className="speakers-content">
                                <h3>Jerry Liu</h3>
                                <span>Co-founder & CEO of Llama Index </span>

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
                                    src={require("../../assets/images/owyang.jpeg")} 
                                    alt="speaker" 
                                />
                            </div>

                            <div className="speakers-content">
                                <h3>Jeremiah Owyang</h3>
                                <span> Twitter Tech KOL </span>

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



                    <div className="col-lg-3 col-sm-6">
                        <div className="single-speakers-box">
                            <div className="speakers-image">
                                <img 
                                    src={require("../../assets/images/lianminzheng.jpeg")}
                                    alt="speaker" 
                                />
                            </div>

                            <div className="speakers-content">
                                <h3>Lianmin Zheng</h3>
                                <span>Author of Vicuna, UCB LMSYS AI Lab</span>

                                <ul className="social">
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="https://lmzheng.net/">
                                            <i className="icofont-web"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/lm_zheng">
                                            <i className="icofont-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lianmin-zheng-6266a8114">
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
                                    src={require("../../assets/images/chuntingzhou.jpeg")}
                                    alt="speaker" 
                                />
                            </div>

                            <div className="speakers-content">
                                <h3>Chunting Zhou</h3>
                                <span>Creator of LIMA, CMU LTI</span>

                                <ul className="social">
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="https://violet-zct.github.io">
                                            <i className="icofont-web"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/violet_zct">
                                            <i className="icofont-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chunting-zhou-14525985">
                                            <i className="icofont-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

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