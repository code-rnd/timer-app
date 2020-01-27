import React from "react";
import ButtonTimerComponent from "../ButtonTimerComponent";
import {DisplayTimerContainer} from "../../containers/DisplayTimerContainer";

import './style.scss';

export default class TimerComponent extends React.Component {
    constructor(props) {
        super(props);

        const {setCount} = props;

        this.setCount = setCount;
        this.timer = "";
        this.count = 0;
    }

    start() {
        this.timer = setInterval(() => {
            this.count = this.count + 1;
            this.setCount({name: this.timer, status: "start", count: this.count});
        }, 1000);
    }

    stop() {
        clearInterval(this.timer);
        this.count = 0;
        this.setCount({name: '', status: "stop", count: this.count});
    }

    pause() {
        clearInterval(this.timer);
        this.setCount({name: this.timer, status: "pause", count: this.count});
    }

    render() {
        return (
            <div className={'timer'}>
                <DisplayTimerContainer/>
                <div className={'timer-controlPanel margin-top25'}>
                    <ButtonTimerComponent value={'start'} controlTimerMethod={() => this.start()}
                                          disabled={this.props.status === 'start'}/>
                    <ButtonTimerComponent value={'pause'} controlTimerMethod={() => this.pause()}
                                          disabled={this.props.status === 'pause' || this.props.status === 'stop'}/>
                    <ButtonTimerComponent value={'stop'} controlTimerMethod={() => this.stop()}
                                          disabled={this.props.status === 'stop'}/>
                </div>
            </div>
        );
    }
}