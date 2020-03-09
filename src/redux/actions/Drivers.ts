import {fetchDriversRequest} from "../../server_requests/Driver";

export enum driversTypes {
    FETCH = 'FETCH_DRIVERS',
    SEARCH = 'SEARCH_DRIVERS'
}

export const fetchDriversAction = () => {
    return async dispatch => {
        const {data} = await fetchDriversRequest();
        dispatch({
            type: driversTypes.FETCH,
            drivers: data
        });
    };
};

export const searchDriversAction = (value: string) => ({
    type: driversTypes.SEARCH,
    searchValue: value
});
