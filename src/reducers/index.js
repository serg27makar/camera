import {combineReducers} from 'redux'
import mainScreenInfo from './mainScreenInfo'
import cameraReducer from './camerasReducer'
import modalReducer from './modalReducer'

const rootReducer = combineReducers ({
    mainScreenInfo,
    cameraReducer,
    modalReducer,
});

export default rootReducer
