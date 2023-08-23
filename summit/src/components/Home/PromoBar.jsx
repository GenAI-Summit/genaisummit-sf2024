import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function PromoCodeBar() {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000); // Reset after 3 seconds
    };

    const promoCodeStyle = {
        cursor: 'pointer',
        fontFamily: 'Poppins, sans-serif',
        border: '1px dotted rgb(104, 129, 233)',
        padding: '3px 5px',
        borderRadius: '3px',
        width: '110px',
        display: 'inline-block',
        textAlign: 'center',
        color: 'rgb(104, 129, 233)'
    };

    return (
        <div style={{ backgroundColor: 'white', zIndex: 100000, textAlign: 'center', padding: '5px 0', fontFamily: 'Poppins, sans-serif' }}>
            <span>Get a 50% Discount </span>
            <CopyToClipboard text="SUMMIT2023" onCopy={handleCopyClick}>
                <span style={promoCodeStyle}>
                    {isCopied ? 'Copied!' : 'SUMMIT2023'}
                </span>
            </CopyToClipboard>
        </div>
    );
}

export default PromoCodeBar;
