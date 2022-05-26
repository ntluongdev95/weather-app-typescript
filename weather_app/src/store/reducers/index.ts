import { combineReducers } from 'redux';
import { alertReducer } from './alertReducer';
import { weatherReducer } from './weatherReducer';


export const rootReducer = combineReducers({
    weather:weatherReducer,
    alert:alertReducer
})
export type RootState = ReturnType<typeof rootReducer>;