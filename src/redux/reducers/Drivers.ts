import {driversTypes} from "../actions/Drivers";

export interface IDriver {
    name: string;
    driverType: string;
    driverRank: number;
    phone: string;
    email: string;
    profile_image: string;
}

export interface driverReducerState {
    drivers: IDriver[];
    searchValue: string;
}

const driverReducer = (state: driverReducerState = {drivers: [], searchValue: ''}, action) => {
    switch (action.type) {
        case driversTypes.FETCH:
            return {
                ...state,
                drivers: action.drivers
            };
        case driversTypes.SEARCH:
            return {
                ...state,
                searchValue: action.searchValue
            };

        default:
            return state;
    }
};

export default driverReducer