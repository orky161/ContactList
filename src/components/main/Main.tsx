import * as React from "react";
import {useCallback, useEffect} from "react";
import {IDriver} from "../../redux/reducers/Drivers";
import './main.scss'
import {Driver} from "./driver/Driver";

interface IMainProps {
    drivers: IDriver[]
    fetchDrivers: () => void
}

export const Main = React.memo((props: IMainProps) => {
    useEffect(() => {
        props.fetchDrivers()
    }, []);

    const getDrivers = useCallback(() => {
        return props.drivers.map((driver: IDriver) => <Driver key={driver.name} driver={driver}/>)
    }, [props.drivers]);

    return (
        <div className='main-container'>
            <div className="drivers-container">
                {/*{props.drivers.map((driver: IDriver) => <Driver key={driver.name} driver={driver}/>)}*/}
                {getDrivers()}
            </div>
        </div>
    );
});
