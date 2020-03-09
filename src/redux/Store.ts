import {applyMiddleware, combineReducers, createStore, Reducer} from "redux";
import thunk from "redux-thunk";
import driverReducer, { driverReducerState } from "./reducers/Drivers";

export interface IReducers {
    driversReducer: driverReducerState
}

const reducers: Reducer<IReducers> = combineReducers({
    driversReducer: driverReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store