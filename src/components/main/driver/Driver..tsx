import * as React from "react";
import {FunctionComponent, useState} from "react";
import './Driver.scss'
import {IDriver} from "../../../redux/reducers/Drivers";

interface IDriverProps {
    driver: IDriver
}

export const Driver: FunctionComponent<IDriverProps> = (props) => {
    const [state, setState] = useState("");

    const {name, driverRank, profile_image, driverType, phone, email} = props.driver
    return (
        <div className='driver-card'>
            <div className='driver-image-border'>
                <div className='driver-image-padding'>
                    <img className='image' src={profile_image}/>
                </div>
                <img className='drive-type-icon'
                     src={`svg/driver/${driverType === 'or' ? 'professional' : 'citizen'}.svg`}/>
            </div>
            <div className='full-name'>{name}</div>
            <div className='rank'>{`Driver rank: ${driverRank}`}</div>
            <div className='phone'>{`Phone Number: ${phone}`}</div>
            <div className='email'>{`Email: ${email}`}</div>
        </div>
    );
}
