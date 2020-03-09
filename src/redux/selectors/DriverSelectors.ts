import {createSelector} from "reselect";
import {IReducers} from "../Store";

const getVisibilityFilter = (state: IReducers) => state.driversReducer.searchValue
const getDrives = (state: IReducers) => state.driversReducer.drivers

export const getVisibleDrivers = createSelector(
    [getVisibilityFilter, getDrives],
    (visibilityFilter, drivers) => {
        return drivers.filter(driver => (driver.name).toLowerCase().indexOf(visibilityFilter.toLocaleLowerCase()) > -1)
    }
)
