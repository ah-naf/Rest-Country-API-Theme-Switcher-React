import React, { useState } from 'react';
import facebookLogo from './icon-facebook.svg';
import twitterLogo from './icon-twitter.svg';
import instagramLogo from './icon-instagram.svg';
import youtubeLogo from './icon-youtube.svg';
import SocialMedia from '../SocialMedia/SocialMedia';
import './SocialMediaList.css';

const data = [
    {
        id: 1,
        name:'facebook',
        icon: facebookLogo,
        username: '@ahnaf',
        number: '1987',
        text: 'FOLLOWERS',
        growth: '12 TODAY',
        isUp: true,
    },
    {
        id: 2,
        name:'twitter',
        icon: twitterLogo,
        username: '@ahnaf',
        number: '1087',
        text: 'FOLLOWERS',
        growth: '24 TODAY',
        isUp: true,
    },
    {
        id: 3,
        name:'instagram',
        icon: instagramLogo,
        username: '@ahnaf',
        number: '11k',
        text: 'FOLLOWERS',
        growth: '235 TODAY',
        isUp: true,
    },
    {
        id: 4,
        name:'youtube',
        icon: youtubeLogo,
        username: '@ahnaf',
        number: '30K',
        text: 'SUBSCRIBER',
        growth: '300 TODAY',
        isUp: false,
    }
]

function SocialMediaList() {
    const [state, setState] = useState(data);
  return (
    <div className="social-list">
        {
            state.map((item) => {
                return <SocialMedia key={item.id} item={item} />
            })
        }
    </div>
  );
}

export default SocialMediaList;
