import * as React from "react";
import {FunctionComponent, useState} from "react";
import './TopBar.scss'

interface ITopBarProps {

}

export const TopBar: FunctionComponent<ITopBarProps> = (props) => {
    const [state, setState] = useState("");

    return (
        <div className='top-bar-container'>
            <div className="title">Contact List</div>
            <div className="search-box">
                <input placeholder='search' className='search-input'/>
            </div>
        </div>
    );
}
