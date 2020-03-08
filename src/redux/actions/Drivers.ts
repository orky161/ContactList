import { Dispatch } from 'react';
import {fetchDriversRequest} from "../../server_requests/Driver";

export enum driversTypes {
  FETCH= 'FETCH_DRIVERS'
}

export const fetchDriversAction = () => {
  return async dispatch => {
    const { data } = await fetchDriversRequest();
    dispatch({
      type: driversTypes.FETCH,
      drivers: data
    });
  };
};
