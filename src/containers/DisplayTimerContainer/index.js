import {connect} from 'react-redux';
import DisplayTimerComponent from "../../components/DisplayTimerComponent";

const mapStateToProps = state => ({
    count: state.data.timer.count,
    status: state.data.timer.status,
})

const mapDispatchToProps = ({})

export const DisplayTimerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayTimerComponent)