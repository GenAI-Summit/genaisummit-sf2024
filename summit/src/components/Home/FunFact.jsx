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
                                <i className="icofont-resize"></i>
                            </div>
                            <h3 className="odometer">
                                <VisibilitySensor
                                    onChange={onVisibilityChange}
                                    offset={{
                                        top: 10000
                                    }}
                                    delayedCall
                                >
                                    <CountUp
                                        start={0}
                                        end={
                                            didViewCountUp
                                                ? 200000
                                                : 0
                                        }
                                        duration={3}
                                    />
                                </VisibilitySensor> +
                            </h3>
                            <p>Sq. FT.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6">
                        <div className="single-funfact">
                            <div className="icon">
                                <i className="icofont-users-social"></i>
                            </div>
                            <h3 className="odometer">
                                <VisibilitySensor
                                    onChange={onVisibilityChange}
                                    offset={{
                                        top: 22
                                    }}
                                    delayedCall
                                >
                                    <CountUp
                                        start={0}
                                        end={
                                            didViewCountUp
                                                ? 50000
                                                : 0
                                        }
                                        duration={3}
                                    />
                                </VisibilitySensor> +
                            </h3>
                            <p>Attendees</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6">
                        <div className="single-funfact">
                            <div className="icon">
                                <i className="icofont-presentation-alt"></i>
                            </div>
                            <h3 className="odometer">
                                <VisibilitySensor
                                    onChange={onVisibilityChange}
                                    offset={{
                                        top: 34
                                    }}
                                    delayedCall
                                >
                                    <CountUp
                                        start={0}
                                        end={
                                            didViewCountUp
                                                ? 500
                                                : 0
                                        }
                                        duration={3}
                                    />
                                </VisibilitySensor> +
                            </h3>
                            <p>Exhibitors</p>
                        </div>
                    </div>

                    

                    <div className="col-lg-3 col-6 col-sm-6">
                        <div className="single-funfact">
                            <div className="icon">
                                <i className="icofont-money"></i>
                            </div>
                            <h3 className="odometer">
                                <VisibilitySensor
                                    onChange={onVisibilityChange}
                                    offset={{
                                        top: 13
                                    }}
                                    delayedCall
                                >
                                    <CountUp
                                        start={0}
                                        end={
                                            didViewCountUp
                                                ? 300
                                                : 0
                                        }
                                        duration={3}
                                    />
                                </VisibilitySensor> +
                            </h3>
                            <p>VCs</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-6 col-sm-6">
                        <div className="single-funfact">
                            <div className="icon">
                                <i className="icofont-microphone"></i>
                            </div>
                            <h3 className="odometer">
                                <VisibilitySensor
                                    onChange={onVisibilityChange}
                                    offset={{
                                        top: 10000
                                    }}
                                    delayedCall
                                >
                                    <CountUp
                                        start={0}
                                        end={
                                            didViewCountUp
                                                ? 200
                                                : 0
                                        }
                                        duration={3}
                                    />
                                </VisibilitySensor> +
                            </h3>
                            <p>Speakers</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6">
                        <div className="single-funfact">
                            <div className="icon">
                                <i className="icofont-ui-camera"></i>
                            </div>
                            <h3 className="odometer">
                                <VisibilitySensor
                                    onChange={onVisibilityChange}
                                    offset={{
                                        top: 22
                                    }}
                                    delayedCall
                                >
                                    <CountUp
                                        start={0}
                                        end={
                                            didViewCountUp
                                                ? 50
                                                : 0
                                        }
                                        duration={3}
                                    />
                                </VisibilitySensor> +
                            </h3>
                            <p>Media Outlets</p>
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
                                        top: 34
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
                                </VisibilitySensor> +
                            </h3>
                            <p>Tracks</p>
                        </div>
                    </div>

                    

                    
                </div>
            </div>
        </section>
    );
}

export default FunFact;