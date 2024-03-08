import {configureStore } from '@reduxjs/toolkit';
import userBodyInfo from './reducers/bodyInfo';

const store = configureStore({
    reducer:{
        userBodyInfo
    }
})
export default store;