import React, {  FC, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAlert } from '../store/actions/alertAction'
import { getWeather } from '../store/actions/weatherAction'
import './Search.css'
const Search:FC =()=> {
    const dispatch =useDispatch()
    const[city,setCity]= useState('')

    const handleChange =(e:FormEvent<HTMLInputElement>)=>{
        setCity(e.currentTarget.value)
    }
    const onSubmit =(e:FormEvent<HTMLFormElement>)=>{
         e.preventDefault()
         if(city.trim()===''){
             return dispatch(setAlert('City is required'))
         }
         dispatch(getWeather(city))
         setCity('')
    }


    return (
        <div className='search'>
            <h1 className='search-title'>Enter city name and press search button</h1>
            <form onSubmit={onSubmit} className='search-form'>
                <input type='text'
                 placeholder='Enter city name'
                 value={city}
                 onChange={handleChange}
                 />
                <button className='search-button'>Search</button>
            </form>
            
        </div>
    )
}

export default Search
