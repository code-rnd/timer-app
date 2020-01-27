import React from "react";

import './style.scss';

export default function DisplayTimerComponent(props) {

    const {status, count} = props;

    return (
        <div className={'displayTimer'}>
            <div>статус таймера: {status}</div>
            <div>сек.: {count}</div>
        </div>
    )
}