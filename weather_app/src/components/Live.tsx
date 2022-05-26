import { useState } from 'react'
import { useEffect } from 'react'
import  { FC } from 'react'
import { News } from '../store/types'
import axios from 'axios'

import './Live.css'
const Live :FC= () => {
    const apiKey :string ='d5029e2dacc24a378af63f1b7eb78d78'
    const[news,setNews] = useState<News[] >([])
    useEffect(()=>{
        axios.get(`https://newsapi.org/v2/everything?q=weather&apiKey=${apiKey}`)
       .then(result => 
         setNews(result.data.articles)
        )
      .catch(error=>console.log(error) )
       },[])
       
    const data =[{src:'https://demo.themezy.com/system/resources/demo_themes/000/000/128//images/thumb-1@2x.jpg'},
    {src:'https://demo.themezy.com/system/resources/demo_themes/000/000/128//images/thumb-2@2x.jpg'},{src:'https://demo.themezy.com/system/resources/demo_themes/000/000/128//images/thumb-9@2x.jpg'},
    {src:'https://demo.themezy.com/system/resources/demo_themes/000/000/128//images/thumb-3@2x.jpg'},{src:'https://demo.themezy.com/system/resources/demo_themes/000/000/128//images/thumb-4@2x.jpg'},
    {src:'https://demo.themezy.com/system/resources/demo_themes/000/000/128//images/thumb-5@2x.jpg'},{src:'https://demo.themezy.com/system/resources/demo_themes/000/000/128//images/thumb-8@2x.jpg'},
    {src:'https://demo.themezy.com/system/resources/demo_themes/000/000/128//images/thumb-6@2x.jpg'},{src:'https://demo.themezy.com/system/resources/demo_themes/000/000/128//images/thumb-7@2x.jpg'}
]
    return (
        <div className='live__container'>
            <div className='live__cameras'>
                <div className='live__title'>LIVE CAMERAS</div>
                <div className='live__grid'>
                    <div className='live__card'>
                        <img className='img' src='https://demo.themezy.com/system/resources/demo_themes/000/000/128//images/live-camera-1@2x.jpg' alt='' />
                        <h4>New York</h4>
                        <small className="date">8 oct, 8:00AM</small>
                    </div>
                    <div className='live__card'>
                        <img className='img' src='https://demo.themezy.com/system/resources/demo_themes/000/000/128//images/live-camera-2@2x.jpg' alt='' />
                        <h4>Los Angeles</h4>
                        <small className="date">8 oct, 8:00AM</small>
                    </div>
                    <div className='live__card'>
                        <img className='img' src='https://demo.themezy.com/system/resources/demo_themes/000/000/128//images/live-camera-3@2x.jpg' alt='' />
                        <h4>Chicago</h4>
                        <small className="date">8 oct, 8:00AM</small>
                    </div>
                    <div className='live__card'>
                        <img className='img' src='https://demo.themezy.com/system/resources/demo_themes/000/000/128//images/live-camera-4@2x.jpg' alt='' />
                        <h4>London</h4>
                        <small className="date">9 oct, 10:00AM</small>
                    </div>
                </div>
            </div>
            <div className='live__news'>
                <div className='live__news-left'>
                   <div className='live__title'>NEWS</div>
                   {news?.map((n,index)=>(
                    <div key={index} className='link__container'>
                    <div className='live__news-link'>
                        <a href={n.url}>
                        {n.title}
                       </a>
                       <span className='resource'>{n.author}.Yesterday</span>
                       <p className='description'>.{n.description}</p>
                    </div>
                    <img className='news__image' src={n.urlToImage} alt='' />
                    </div>
                    ))}
                </div>
                <div className='live__news-right'>
                     <div className='live__title'>AWESOME PHOTOS</div>
                     <div className='live__news-grid'>
                         {data.map((i,index)=>(
                        <div key={index} className='grid__photos'>
                            <img className='grid__photo' src={i.src} alt='' />
                        </div>
                        ))}
                     </div>
                </div>
            </div>
            <div className='live__bottom'>
               <div className='live__search'>
                    <input className='input__sub' placeholder='Enter your email to subcribe' type='text' />
                    <button className='serach__btn-bottom'>Subscribe</button>
               </div>
               <div className='live_info'>
                   <h1 className='h1'>NTL</h1>
                   <small className='coppyright'>Copyright © 2021 HubSpot, Inc.</small>
               </div>
            </div>
        </div>
    )
}

export default Live
