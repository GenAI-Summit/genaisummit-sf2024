import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import lax from 'lax.js';

const GoldSponsors = () => {
    const elRef = useRef();

    useEffect(() => {
        const el = ReactDOM.findDOMNode(elRef.current);
        lax.addElement(el);

        return () => {
            lax.removeElement(el);
        }
    }, []);

    return (
        <h3 className="lax" data-lax-preset="driftLeft" ref={elRef}>Silver Sponsors</h3>
    );
}

export default GoldSponsors;
