import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import lax from 'lax.js';

const LaxButton = ({ buttonText = 'Explore More About' }) => {
    const el = useRef(null);

    useEffect(() => {
        if (el.current) {
            lax.addElement(el.current);
        }
        
        return () => {
            if (el.current) {
                lax.removeElement(el.current);
            }
        }
    }, []);

    return (
        <Link to="#" className="btn btn-primary lax" data-lax-preset="driftLeft" ref={el}>
            {buttonText}
        </Link>
    );
}

export default LaxButton;
