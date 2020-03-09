import {connect} from "react-redux";
import {Main} from "./Main";
import {IReducers} from "../../redux/Store";
import {fetchDriversAction} from "../../redux/actions/Drivers";
import {getVisibleDrivers} from "../../redux/selectors/DriverSelectors";

const mapStateToProps = (state: IReducers) => {
    return {
        drivers: getVisibleDrivers(state)
    }
};

const matchDispatchToProps = (dispatch) => {
    return {
        fetchDrivers: ()=> dispatch(fetchDriversAction())
    }
};


export default connect(mapStateToProps, matchDispatchToProps)(Main)
