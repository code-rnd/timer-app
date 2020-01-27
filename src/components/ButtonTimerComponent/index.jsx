import React from "react";

import './style.scss';

export default function ButtonTimerComponent(props) {

    const {value, controlTimerMethod, disabled} = props;

    return (
        <div className={'buttonTimer'}>
            <input className={'buttonTimer-input'} type={'button'} value={value} onClick={() => controlTimerMethod()} disabled={disabled}/>
        </div>
    )
}