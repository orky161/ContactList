import {driversTypes} from "../actions/Drivers";

export interface IDriver {
    name: string
    driverType: string
    driverRank: number
    phone: string
    email: string
    profile_image: string
}

export interface driverReducerState {
    drivers: IDriver[]
}

const driverReducer = (state: driverReducerState = {drivers : []}, action) => {
    switch (action.type) {
        case driversTypes.FETCH:
            console.log(action.type)
            return {
                ...state,
                drivers: action.drivers
            };

        default:
            return state;
    }
};

export default driverReducer