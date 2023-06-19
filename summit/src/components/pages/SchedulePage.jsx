import React from 'react'
import MainBanner from '../schedule/MainBanner';
import EventSchedulesOne from '../schedule/EventSchedules';
import Footer from '../Common/Footer';
 
const SchedulePage = () => {
    return (
        <>
            <MainBanner />
            <EventSchedulesOne />
            <Footer />
        </>
    );
}
 
export default SchedulePage;