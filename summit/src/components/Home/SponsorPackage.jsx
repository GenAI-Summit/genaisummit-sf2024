import React, { useEffect } from 'react';

const SponsorPackage = () => {
    return (
        <section className="pricing-area ptb-120">
            <div className="container">
                <div className="section-title">
                    <h2>Sponsor Packages</h2>
                    <a href="https://www.gptdao.ai/get-started" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Become Our Sponsor</a>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="pricing-table-box">
                            <div className="pricingTable-header">
                                <h3 className="title">Silver</h3>
                                <div className="price-value"></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="pricing-table-box">
                            <div className="pricingTable-header">
                                <h3 className="title">Golden</h3>
                                <div className="price-value"></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 offset-lg-0 offset-md-3">
                        <div className="pricing-table-box">
                            <div className="pricingTable-header">
                                <h3 className="title">Diamond</h3>
                                <div className="price-value"></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 offset-lg-0 offset-md-3">
                        <div className="pricing-table-box">
                            <div className="pricingTable-header">
                                <h3 className="title">Platinum</h3>
                                <div className="price-value"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default SponsorPackage;