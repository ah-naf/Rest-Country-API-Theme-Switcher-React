import './Input.css';
import {BiSearchAlt2,BiChevronDown} from 'react-icons/bi';
import { useState } from 'react';


export default function Input({filterData,searchFilter}) {
    const [filterMenu, setFilterMenu] = useState('Filter by Region');
    const show = () => {
       const filter_box = document.querySelector('.filter-box');
       filter_box.classList.toggle('show');
    }

    const change = name => {
        setFilterMenu(name);
        filterData(name);
    }

    const search = e => {
        let name = e.target.value;
        searchFilter(name);
    }

    return (
        <div className="input-container">
            <div className="search">
                <BiSearchAlt2 className="search-icon" />
                <input type="text" placeholder='Search for a country...' onChange={search} />
            </div>
            <div className="filter-container" onClick={show}>
                <p>{filterMenu}</p>
                <BiChevronDown className="down-icon" />
                <div className="filter-box">
                    <div className="filter-items">
                        <p onClick={() => change('Africa')}>Africa</p>
                        <p onClick={() => change('Americas')}>Americas</p>
                        <p onClick={() => change('Asia')}>Asia</p>
                        <p onClick={() => change('Europe')}>Europe</p>
                        <p onClick={() => change('Oceania')}>Oceania</p>
                    </div>
                </div>
            </div>
        </div>
    );
}