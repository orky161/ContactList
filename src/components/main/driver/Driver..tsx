import * as React from "react";
import {FunctionComponent, useState} from "react";
import './Driver.scss'
import {IDriver} from "../../../redux/reducers/Drivers";

interface IDriverProps {
    driver: IDriver
}

export const Driver: FunctionComponent<IDriverProps> = (props) => {
    const [state, setState] = useState("");

    return (
        <div className='driver-card'>
            {props.driver.name}
        </div>
    );
}
