import React, { useEffect, useRef } from 'react';
import lax from 'lax.js';

const LaxDiv = ({ text = 'Speakers', dataPreset = 'driftRight' }) => {
    const el = useRef(null);

    useEffect(() => {
        if (el.current) {
            lax.addElement(el.current);
        }

        return () => {
            if (el.current) {
                lax.removeElement(el.current);
            }
        };
    }, []);

    return (
        <div className="bg-title lax" data-lax-preset={dataPreset} ref={el}>
            {text}
        </div>
    );
}

export default LaxDiv;
