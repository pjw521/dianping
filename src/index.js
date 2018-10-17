import React from 'react';
import ReactDOM from 'react-dom';
import RouterMap from "./router/router.js"
import configStore from "./store/configStore"
import {Provider} from "react-redux"
const store = configStore();


ReactDOM.render(<Provider store={store}>
    <RouterMap></RouterMap>
</Provider>,document.getElementById('root'));
