import * as React from "react";
import {FunctionComponent, useEffect, useState} from "react";
import {IDriver} from "../../redux/reducers/Drivers";

interface IMainProps {
    drivers: IDriver[]
    fetchDrivers: () => void
}

export const Main: FunctionComponent<IMainProps> = (props) => {
    const [state, setState] = useState("");
    useEffect(() => {
            props.fetchDrivers()},
        [])

    return (
        <div className=''>

        </div>
    );
}
