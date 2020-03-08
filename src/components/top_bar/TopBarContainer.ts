import {connect} from "react-redux";
import {TopBar} from "./TopBar";
import {searchDriversAction} from "../../redux/actions/Drivers";

const mapStateToProps = (state) => {
    return {}
};

const matchDispatchToProps = (dispatch) => {
    return {
        searchDrivers: (value: string) => dispatch(searchDriversAction(value)),
    }
};


export default connect(mapStateToProps, matchDispatchToProps)(TopBar)
