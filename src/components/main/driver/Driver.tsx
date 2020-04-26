import * as React from "react";
import './Driver.scss'
import {IDriver} from "../../../redux/reducers/Drivers";

interface IDriverProps {
    driver: IDriver
}

export const Driver = React.memo((props: IDriverProps) => {
    const {name, driverRank, profile_image, driverType, phone, email} = props.driver;

    return (
        <div className='driver-card'>
            <div className='driver-image-border'>
                <div className='driver-image-padding'>
                    <img className='image' src={profile_image || `svg/top_bar/search.svg`} alt={'Driver image'}/>
                </div>
                <img className='drive-type-icon'
                     src={`svg/driver/${driverType.trim().toLowerCase()}.svg`} alt={'Driver type icon'}/>
            </div>
            <DriverDetails email={email} name={name} driverRank={driverRank} phone={phone}/>
        </div>
    );
});

const DriverDetails = React.memo((props: { phone, email, driverRank, name }) => {
    const {name, driverRank, phone, email} = props;

    const driverPhone = phone || 'Not Found';
    const driverEmail = email || 'Not Found';

    return (
        <React.Fragment>
            <div className='full-name'>{name}</div>
            <div className='rank'>{`Driver rank: ${driverRank}`}</div>
            <div title={driverPhone} className='phone'>{`Phone Number: ${driverPhone}`}</div>
            <div title={driverEmail} className='email'>{`Email: ${driverEmail}`}</div>
        </React.Fragment>
    );
});