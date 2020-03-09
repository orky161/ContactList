import * as React from "react";
import {FunctionComponent} from "react";
import './TopBar.scss'

interface ITopBarProps {
    searchDrivers: (value:string) => void
}

export const TopBar: FunctionComponent<ITopBarProps> = (props) => {

    const handleSearchDrivers = (e) => {
        props.searchDrivers(e.target.value);
    };

    return (
        <div className='top-bar-container'>
            <div className="title">Contact List</div>
            <div className="search-box">
                <input placeholder='search' onChange={handleSearchDrivers} className='search-input'/>
            </div>
        </div>
    );
};
