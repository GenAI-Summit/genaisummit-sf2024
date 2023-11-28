import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import lax from 'lax.js';
import LaxDiv from '../Shared/LaxDiv';

const BoothSponsors = () => {
    const elRef = useRef();

    useEffect(() => {
        const el = ReactDOM.findDOMNode(elRef.current);
        lax.addElement(el);

        return () => {
            lax.removeElement(el);
        }
    }, []);

    return (
        // <div className="section-title">
        // <LaxDiv text="Sponsors" dataPreset="driftRight" />
        
        // <h2>Exhibits (previous)</h2>
        // <h1>Exhibits (previous)</h1>
        // <span>Showcase your product to everyone at the Summit!</span>
        // </div>
        
        <div className="section-title">
        <span>Showcase your product to everyone at the Summit!</span>
        <h2>Previous Exhibits</h2>
        {/* <h4>(From "<a href="https://sv2023.genaisummit.xyz/" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }} >GenAI Summit 2023</a>")</h4>
        
        <p>and GenAI Cloud Computing Collaborators</p> */}
        <LaxDiv text="Exhibits" dataPreset="driftRight" />
        <a href="https://www.gptdao.ai/get-started" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Hold an exhibit spot</a>
    </div>
    );
}

export default BoothSponsors;
