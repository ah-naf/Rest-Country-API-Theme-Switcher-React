import React from 'react';
import facebookLogo from '../images/icon-facebook.svg';
import twitterLogo from '../images/icon-twitter.svg';
import instagramLogo from '../images/icon-instagram.svg';
import youtubeLogo from '../images/icon-youtube.svg';
import DashBoard from '../DashBoard/DashBoard';
import './DashBoardList.css';

const data = [
    {
        id: 1,
        text: 'Page Views',
        icon: facebookLogo,
        number: 87,
        growth: '3%',
        isUp: true,
    },
    {
        id: 2,
        text: 'Likes',
        icon: facebookLogo,
        number: 52,
        growth: '2%',
        isUp: true,
    },
    {
        id: 3,
        text: 'Likes',
        icon: instagramLogo,
        number: 8745,
        growth: '324%',
        isUp: true,
    },
    {
        id: 4,
        text: 'Profile Views',
        icon: instagramLogo,
        number: '10k',
        growth: '324%',
        isUp: true,
    },
    {
        id: 5,
        text: 'Retweets',
        icon: twitterLogo,
        number: 375,
        growth: '27%',
        isUp: true,
    },
    {
        id: 6,
        text: 'Likes',
        icon: twitterLogo,
        number: 745,
        growth: '505%',
        isUp: true,
    },
    {
        id: 7,
        text: 'Likes',
        icon: youtubeLogo,
        number: 107,
        growth: '19%',
        isUp: false,
    },
    {
        id: 8,
        text: 'Total Views',
        icon: youtubeLogo,
        number: 1407,
        growth: '37%',
        isUp: false,
    },
];

function DashBoardList({darkMode}) {
    return (
        <div className={`dashboard-container ${darkMode? '':'dashboard-container-light'}`}>
            <h1>Overview - Today</h1>
            <div className="dashboard-items">
                {
                    data.map((item) => {
                        return <DashBoard key={item.id} item={item} darkMode={darkMode} />
                    })
                }
            </div>
        </div>
    );
}

export default DashBoardList;