import React from 'react';
import iconUp from '../images/icon-up.svg';
import iconDown from '../images/icon-down.svg';
import './DashBoard.css';

function DashBoard({item, darkMode}) {
    return (
        <div className={`item-container ${darkMode ? '': 'item-container-light'}`}>
            <div className="col-1">
                <p>{item.text}</p>
                <img src={item.icon} alt="" />
            </div>
            <div className="col-2">
                <h2>{item.number}</h2>
                <div className={`growth-container ${item.isUp ? 'growth-up':'growth-down'}`}>
                    <img src={item.isUp ? iconUp: iconDown} alt="" />
                    <p>{item.growth}</p>
                </div>
            </div>
        </div>
    );
}

export default DashBoard;