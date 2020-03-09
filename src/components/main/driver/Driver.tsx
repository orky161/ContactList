import * as React from "react";
import {FunctionComponent} from "react";
import './Driver.scss'
import {IDriver} from "../../../redux/reducers/Drivers";

interface IDriverProps {
    driver: IDriver
}

export const Driver: FunctionComponent<IDriverProps> = (props) => {
    const {name, driverRank, profile_image, driverType, phone, email} = props.driver;

    const getDriverDetails = () => {
        return <React.Fragment>
            <div className='full-name'>{name}</div>
            <div className='rank'>{`Driver rank: ${driverRank}`}</div>
            <div className='phone'>{`Phone Number: ${phone || 'Not Found'}`}</div>
            <div className='email'>{`Email: ${email || 'Not Found'}`}</div>
        </React.Fragment>
    };

    return (
        <div className='driver-card'>
            <div className='driver-image-border'>
                <div className='driver-image-padding'>
                    <img className='image' src={profile_image || `svg/top_bar/search.svg`} alt={'Driver image'}/>
                </div>
                <img className='drive-type-icon'
                     src={`svg/driver/${driverType.trim().toLowerCase()}.svg`} alt={'Driver type icon'}/>
            </div>
            {getDriverDetails()}
        </div>
    );
};
