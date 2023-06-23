import React, { useEffect } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const TwitterFeed = () => {
    return (
        <div className='twitter-area ptb-120' style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '80%' }}>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="GPTDAOGLOBAL"
                    options={{height: 500}}
                />
            </div>
        </div>
    );
}

export default TwitterFeed;
