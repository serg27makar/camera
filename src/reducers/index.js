import {combineReducers} from 'redux'
import mainScreenInfo from './mainScreenInfo'
import cameraReducer from './camerasReducer'

const rootReducer = combineReducers ({
    mainScreenInfo,
    cameraReducer,
});

export default rootReducer
