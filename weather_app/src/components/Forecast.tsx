
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/reducers'
import './Forecast.css'
const Forecast :FC =()=> {
    const data=useSelector((state:RootState)=>state.weather.weatherData)
    return (
        <div className='forecast__container'>
            {data  ?(
            <>
            <div style={{backgroundImage:'url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/79/a8/b5/caption.jpg?w=500&h=400&s=1)',backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'}} className='forecast__card1'>
                <div className='title'>
                    <h1>{data?.name}-{data?.sys.country}</h1>
                    <span className='time'>{new Date().toDateString()}</span>
                </div>
                <div className='card1__detail'>
                   <div className='detail__header'>
                       <img src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}.png`} alt='' />
                       <h2>{data?.weather[0].main}</h2>
                   </div>
                   <div className='detail__temp'>
                       {data ?(
                         ( Number(data?.main.temp) -273.15).toFixed(0)
                       ):(0)}
                      
                       <sup>o</sup>C
                   </div>
                </div>
            </div>
            </>
            ):(
                <div style={{backgroundImage:'url(https://t3.ftcdn.net/jpg/00/40/85/24/360_F_40852423_BNj3XIsdzk4ujLQKzNAiH99wYBjXN4HO.jpg)',backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}} className='forecast__card1'></div>
            )}
            {data ? (
             <div 
            style={{backgroundImage:'url(https://media.timeout.com/images/105831933/1372/772/image.jpg)',backgroundPosition: 'top right',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}
            className='forecast__card2'>
                    <div className='layer'>
                    <div className='title'>
                        <h1>{data?.name}-{data?.sys.country}</h1>
                        <span className='time'>{new Date().toDateString()}</span>
                    </div>
                    <div className='card2__detail'>
                       <div className='detail__header'>
                           <img src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}.png`} alt='' />
                           <h2>{data?.weather[0].main}</h2>
                        </div>
                        <div className='detail__temp'>
                        {data ?(
                         ( Number(data?.main.temp) -273.15).toFixed(0)
                       ):(0)}
                            <sup>o</sup>C
                        </div>
                    </div>
                    <div className='forecast__week'>
                        <div className='forecast__title'>Forecast</div>
                        <div className='forecast__day'>
                            <div className='date'>Monday</div>
                            <img src='https://demo.themezy.com/system/resources/demo_themes/000/000/128//images/icons/icon-3.svg' alt='' />
                            <div className='degree'>24 <sup>o</sup>C</div>
                            <div className='degree color'>16 <sup>o</sup>C</div>
                        </div>
                        <div className='forecast__day'>
                            <div className='date'>Tuesday</div>
                            <img src='https://demo.themezy.com/system/resources/demo_themes/000/000/128//images/icons/icon-3.svg' alt='' />
                            <div className='degree'>24 <sup>o</sup>C</div>
                            <div className='degree color'>16 <sup>o</sup>C</div>
                        </div>
                        <div className='forecast__day'>
                            <div className='date'>Wednesday</div>
                            <img src='https://demo.themezy.com/system/resources/demo_themes/000/000/128//images/icons/icon-3.svg' alt='' />
                            <div className='degree'>24 <sup>o</sup>C</div>
                            <div className='degree color'>16 <sup>o</sup>C</div>
                        </div>
                        <div className='forecast__day'>
                            <div className='date'>Thursday</div>
                            <img src='https://demo.themezy.com/system/resources/demo_themes/000/000/128//images/icons/icon-3.svg' alt='' />
                            <div className='degree'>24 <sup>o</sup>C</div>
                            <div className='degree color'>16 <sup>o</sup>C</div>
                        </div>
                        <div className='forecast__day'>
                            <div className='date'>Friday</div>
                            <img src='https://demo.themezy.com/system/resources/demo_themes/000/000/128//images/icons/icon-3.svg' alt='' />
                            <div className='degree'>24 <sup>o</sup>C</div>
                            <div className='degree color'>16 <sup>o</sup>C</div>
                        </div>
                    </div>
                </div>
           </div> ):(
             <div
                style={{backgroundImage:'url(https://media.timeout.com/images/105831933/1372/772/image.jpg)',backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}} className='forecast__card2'></div>
            )}
            {data ?(
               <>
               <div 
            style={{backgroundImage:'url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/79/a8/b5/caption.jpg?w=500&h=400&s=1)',backgroundPosition: 'top right',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}
            className='forecast__card3'>
                   <div className='title'>
                        <h1>{data?.name}-{data?.sys.country}</h1>
                        <span className='time'>{new Date().toDateString()}</span>
                  </div>
                 <div className='divider'></div>
                 <div className='card3__detail'>
                    <div className='detail__title'>Detail</div>
                    <div className='detail__info'>
                        <div className='left'>
                            <img  className='moonIcon' src='https://demo.themezy.com/system/resources/demo_themes/000/000/128//images/icons/icon-7.svg' alt='' />
                        </div>
                        <div className='right'>
                            <div className='row1'>
                                 <p>Feels like</p>
                                <span className='number'>{( Number(data?.main.feels_like) -273.15).toFixed(2)}
                                     <sup>o</sup>C</span>
                            </div>
                            <div className='row1'>
                                 <p>Humidity</p>
                                <span className='number'>{data?.main.humidity}% </span>
                            </div>
                            <div className='row1'>
                                 <p>Main</p>
                                <span className='number'>{data?.weather[0].main} </span>
                            </div>
                            <div className='row1'>
                                 <p>Wind</p>
                                <span className='number'>{data?.wind.speed}/s </span>
                                     
                            </div>
                        </div>
                    </div>
                </div>
                </div>
               </>
            ):(
                <div 
                style={{backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1qgLtxlfwamTAB0FEVtSVy-p9NgMdtYLaSQ&usqp=CAU)',backgroundPosition: 'top center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}
                className='forecast__card3'></div>
            )}
            {data ? (
                <>
                <div
                style={{backgroundImage:'url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/79/a8/b5/caption.jpg?w=500&h=400&s=1)',backgroundPosition: 'top right',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}
               className='forecast__card4'>
                   <div className='layer2'>
                   <div className='title'>
                           <h1>{data?.name}-{data?.sys.country}</h1>
                           <span className='time'>{new Date().toDateString()}</span>
                   </div>
                   <div className='map'>
                        <div className='detail__title'>Map</div>
                        <div className='image__map'>
                            <img src='data:image/jpeg;base64,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' alt='' />
                        </div>
                   </div>
                  </div>
                </div>
                 </>
            ):(
                <div
                style={{backgroundImage:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/In_the_photo_there_is_one_Perseid%2C_Milky_Way_and_Andromega_galaxy_and_light_pollution_on_the_horizon_-_Luhasoo_bog_in_Estonia.jpg/1200px-In_the_photo_there_is_one_Perseid%2C_Milky_Way_and_Andromega_galaxy_and_light_pollution_on_the_horizon_-_Luhasoo_bog_in_Estonia.jpg)',backgroundPosition: 'top right',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}
               className='forecast__card4'></div>
            )}
    
        </div>
        
    )
}

export default Forecast
