import {createSelector} from "reselect";
import {IReducers} from "../Store";

const searchValue = (state: IReducers) => state.driversReducer.searchValue;
const getDrives = (state: IReducers) => state.driversReducer.drivers;

export const getVisibleDrivers = createSelector(
    [searchValue, getDrives],
    (visibilityFilter, drivers) => {
        return drivers.filter(driver => (driver.name).toLowerCase().indexOf(visibilityFilter.toLowerCase()) > -1)
    }
);
