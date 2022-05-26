import { RootState } from '../reducers/index';

import axios from 'axios'
import { GET_WEATHER, WeatherAction, SET_ERROR } from './../types';
import{ThunkAction} from 'redux-thunk'

const API_KEY ='e3a5a89f714b7b50f578813d404c24c9'
export const getWeather =(city:string):ThunkAction<void,RootState,null,WeatherAction>=>async dispatch =>{
   try {
       const{data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
       dispatch({
           type:GET_WEATHER,
           payload:data

       })
       
   } catch (error) {
       dispatch({
           type:SET_ERROR,
           payload:error.message
           
       })
   }
}
