import {FC, FormEvent, useState} from 'react';
import Header from './components/Header'
import Live from './components/Live';
import './App.css';
import { useEffect } from 'react';
import Forecast from './components/Forecast';
import { useDispatch } from 'react-redux';
import { getWeather } from './store/actions/weatherAction';
import { setAlert } from './store/actions/alertAction';

const App:FC=() =>{
  const[city,setCity] = useState<string>('')
  const dispatch = useDispatch()
  const background =[{src:"https://free4kwallpapers.com/uploads/originals/2015/10/02/new-york-city-under-dark-sunset.jpg"},
   {src:'https://i.pinimg.com/originals/b8/a5/b6/b8a5b6a4f51c15bccc1c4a8668ed6c19.jpg'},
   {src:'https://img.freepik.com/free-photo/sunny-morning-eiffel-tower-paris-france_219717-5037.jpg?w=2000'},
   {src:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/In_the_photo_there_is_one_Perseid%2C_Milky_Way_and_Andromega_galaxy_and_light_pollution_on_the_horizon_-_Luhasoo_bog_in_Estonia.jpg/1200px-In_the_photo_there_is_one_Perseid%2C_Milky_Way_and_Andromega_galaxy_and_light_pollution_on_the_horizon_-_Luhasoo_bog_in_Estonia.jpg'}
  ,{src:'https://static.onecms.io/wp-content/uploads/sites/28/2021/07/16/dubai-DUBAITG0721.jpg'},
  {src:'https://www.commonwealthfund.org/sites/default/files/styles/countries_hero_desktop/public/country_image_Singapore.jpg?h=9e2be1c6&itok=_pij4g1j'}
  ]
  const[random,setRamdom] = useState(0)
  useEffect(() => {
     const timer:ReturnType<typeof setTimeout> = setTimeout(()=>{
          setRamdom(Math.floor(Math.random() *6))
     },8000)
     return ()=>clearTimeout(timer)
  })
  
   const handleCityChange =(e:FormEvent<HTMLInputElement>) =>{
         setCity(e.currentTarget.value)
   }
  const onSubmit =(e:FormEvent<HTMLElement>)=>{
       e.preventDefault()
       if(city.trim()===''){
        return dispatch(setAlert('City is required'))
    }
    dispatch(getWeather(city))
    setCity('')
  }
  return (
    <div className="app">
      <Header />
      <div style={{backgroundImage:`url(${background[random].src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
        }}
       className='app__search'>
           <form onSubmit={onSubmit} className='search__container'>
                <input name='city' value={city} onChange={handleCityChange} placeholder='Find your city...' type='text' />
                <button className='serach__btn'>Find</button>
          </form>
        </div>
        <Forecast />
        <Live />
    </div>
  );
}

export default App;
