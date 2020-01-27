import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {store} from "./store";
import {TimerContainer} from "./containers/TimerContainer";

import './style.scss';

ReactDOM.render(
    <Provider store={store}>
        <TimerContainer/>
    </Provider>,
    document.getElementById('root'));

