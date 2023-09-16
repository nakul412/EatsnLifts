import React from 'react'
import './Exercises.css'
import { useEffect,useState } from 'react';
import BasicCarousel from './BasicCarousel';
import $ from 'jquery';

// let data=[]
const Exercises = ({data}) => {
  

  return (
   
    <div className='exrcisesdiv'> 
    <div className='goalshead goalstag'>
    <span className='colororange'>Discover   </span> the Power of Home Workouts And Elevate Your <span className='colororange textc'>Fitness into results!</span>
    
    </div>
    <div className='goalscontent'>
    <p className='goalstag2 textc '>
    Transform Your Body Now! 10 Targeted Workouts to Sculpt Every Body Part! </p>
    
    <p className='goalstag2 textc'> Get Ready to Feel Strong, Confident, and Energized in No Time!</p><p className='goalstag2 textc'></p>
    
    <BasicCarousel  data={data}/>

    
    </div></div>
  )
}

export default Exercises