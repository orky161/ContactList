import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {App} from './components/App';
import React from 'react';
import store from "./redux/Store";

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
