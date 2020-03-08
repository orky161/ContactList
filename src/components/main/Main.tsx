import * as React from "react";
import {FunctionComponent, useEffect, useState} from "react";
import {IDriver} from "../../redux/reducers/Drivers";
import './main.scss'
import {Driver} from "./driver/Driver.";

interface IMainProps {
    drivers: IDriver[]
    fetchDrivers: () => void
}

export const Main: FunctionComponent<IMainProps> = (props) => {
    useEffect(()=>props.fetchDrivers(), [])

    return (
        <div className='main-container'>
            <div className="drivers-container">
                {props.drivers.map((driver: IDriver) => <Driver key={driver.email} driver={driver}/>)}
            </div>
        </div>
    );
}
