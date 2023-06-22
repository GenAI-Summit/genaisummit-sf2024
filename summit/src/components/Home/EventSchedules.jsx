import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LaxDiv from '../Shared/LaxDiv';
import Events from '../schedule/Events';

const EventSchedules = () => {
        return (
            <section className="schedule-area bg-image ptb-120">
                <div className="container">
                    <div className="section-title">
                        <span>10 events covering 10 topics</span>
                        <h2>Summit Events</h2>

                        <LaxDiv text="Events" dataPreset="driftLeft" />
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tab">
                                <Events />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
}
 
export default EventSchedules;