import {connect} from "react-redux";
import {Main} from "./Main";
import {IReducers} from "../../redux/Store";
import {fetchDriversAction} from "../../redux/actions/Drivers";

const mapStateToProps = (state: IReducers) => {
    return {
        drivers: state.driversReducer.drivers
    }
};

const matchDispatchToProps = (dispatch) => {
    return {
        fetchDrivers:()=> dispatch(fetchDriversAction())
    }
};


export default connect(mapStateToProps, matchDispatchToProps)(Main)
