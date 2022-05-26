import { GET_WEATHER, WeatherAction, WeatherState, SET_ERROR } from './../types';

const initialState: WeatherState ={
    weatherData:null,
    isLoading:true,
    error:''
}

export const weatherReducer =(state=initialState,action:WeatherAction):WeatherState=>{
    switch(action.type){
        case GET_WEATHER:
            return{
               ...state,
               weatherData:action.payload,
               isLoading:false 
            }
        case SET_ERROR:
            return{
                ...state,
                isLoading:false,
                error:action.payload

            }
        default:
            return state
            
    }
}