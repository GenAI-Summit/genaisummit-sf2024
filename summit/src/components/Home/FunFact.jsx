import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
 
const FunFact = () => {
    const [didViewCountUp, setDidViewCountUp] = useState(false);

    const onVisibilityChange = isVisible => {
        if (isVisible) {
            setDidViewCountUp(true);
        }
    };

    return (
        <section className="funfacts-area ptb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-6 col-sm-6">
                        <div className="single-funfact">
                            <div className="icon">
                                <i className="icofont-users-social"></i>
                            </div>
                            <h3 className="odometer">
                                <VisibilitySensor
                                    onChange={onVisibilityChange}
                                    offset={{
                                        top: 1500
                                    }}
                                    delayedCall
                                >
                                    <CountUp
                                        start={0}
                                        end={
                                            didViewCountUp
                                                ? 1500
                                                : 0
                                        }
                                        duration={3}
                                    />
                                </VisibilitySensor>
                            </h3>
                            <p>Attendees</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6">
                        <div className="single-funfact">
                            <div className="icon">
                                <i className="icofont-focus"></i>
                            </div>
                            <h3 className="odometer">
                                <VisibilitySensor
                                    onChange={onVisibilityChange}
                                    offset={{
                                        top: 10
                                    }}
                                    delayedCall
                                >
                                    <CountUp
                                        start={0}
                                        end={
                                            didViewCountUp
                                                ? 10
                                                : 0
                                        }
                                        duration={3}
                                    />
                                </VisibilitySensor>
                            </h3>
                            <p>Topics</p>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-6 col-sm-6">
                        <div className="single-funfact">
                            <div className="icon">
                                <i className="icofont-microphone"></i>
                            </div>
                            <h3 className="odometer">
                                <VisibilitySensor
                                    onChange={onVisibilityChange}
                                    offset={{
                                        top: 20
                                    }}
                                    delayedCall
                                >
                                    <CountUp
                                        start={0}
                                        end={
                                            didViewCountUp
                                                ? 20
                                                : 0
                                        }
                                        duration={3}
                                    />
                                </VisibilitySensor>
                            </h3>
                            <p>Speakers</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6">
                        <div className="single-funfact">
                            <div className="icon">
                                <i className="icofont-copy"></i>
                            </div>
                            <h3 className="odometer">
                                <VisibilitySensor
                                    onChange={onVisibilityChange}
                                    offset={{
                                        top: 15
                                    }}
                                    delayedCall
                                >
                                    <CountUp
                                        start={0}
                                        end={
                                            didViewCountUp
                                                ? 15
                                                : 0
                                        }
                                        duration={3}
                                    />
                                </VisibilitySensor>
                            </h3>
                            <p>Sponsors</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default FunFact;