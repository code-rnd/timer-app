import {connect} from 'react-redux';
import TimerComponent from "../../components/TimerComponent";
import {setCount} from "../../store/actions";

const mapStateToProps = state => ({
    status: state.data.timer.status
})

const mapDispatchToProps = ({
    setCount
})

export const TimerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TimerComponent)