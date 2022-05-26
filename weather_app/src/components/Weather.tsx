import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/reducers'
import './weather.css'
const Weather :FC =()=>{
    const data=useSelector((state:RootState)=>state.weather.weatherData)
    return (
        <div className='container'>
            <h2 className='city_name'>{data?.name}-{data?.sys.country}</h2>
            <div className='weather-results'>
                <div className='weather-img'>
                    <h3 className='description'>{data?.weather[0].description}</h3>
                    <img src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}.png`} />
                </div>
                <div className='weather-temperture'>
                    <div className='weather-description'>TEMP</div>
                    <span >{data?.main.temp}K</span>
                    <span >30<sup>&#8457;</sup></span>
                    <span >30<sup>&#8457;</sup></span>
                </div>
                <div className='weather-index'>
                    <span className='weather-description'>HUMIDITY</span>
                    <span className='weather-number'>{data?.main.humidity}</span>
                </div>
                <div className='weather-index'>
                    <span className='weather-description'>PRESSURE</span>
                    <span className='weather-number'>{data?.main.pressure}</span>
                </div>
                <div className='weather-index'>
                    <span className='weather-description'>WIND</span>
                    <span className='weather-number'>{data?.wind.speed}/s</span>
                </div>
            </div>
            
        </div>
    )
    }

export default Weather
