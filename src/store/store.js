//Importing configureStore from the redux toolkit
import {configureStore} from '@reduxjs/toolkit';
//Importing counterReducer to pass through configureStore
import counterReducer from './counter';

//Exporting configureStore function with counter reducer
export default configureStore({
    reducer: {
        counter: counterReducer,
    },
});