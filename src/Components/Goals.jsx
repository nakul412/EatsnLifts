import React from 'react'
import './Goals.css'

import './Card.css'
const Goals = () => {
    const  carddata=[
        {
            id:1,
            img:"",
            content:"",
        },
        {
            id:2,
            img:"",
            content:"",
        },
        {
            id:3,
            img:"",
            content:"",
        }
    ]
  return (
   <div>
    <div className='goalsdiv' >
      <div className=' goalshead '>
     
     <span className='colororange '> Start </span>
       Doing Daily Workouts and transfrom your  <span className='colororange'>efforts into results!</span>
      
      </div>
      <div className='goalscontent'>
      <p className='goalstag2 textc '>
      Discover the joy of fitness and embrace a healthier lifestyle with</p>
      <p className='goalstag2 textc'> our engaging workouts and a vibrant community. Join us today</p><p className='goalstag2 textc'>and unlock the best version of yourself!</p>
      
      </div>
      <div className='carddiv'>
      <div>
      <div className="card">
      <div className='imgdiv'> <iframe src="https://lottie.host/?file=cd70abdc-ac9b-4de1-8208-a529591e3a9a/Aa73znXeZA.json" className='animatedframe'></iframe></div>
      <div className='flexcenter'><p className='cardname'>CLASS</p></div>
      <p className='cardcontent'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore minus saepe </p>
      </div>
    </div>
    <div>
      <div className="card">
      <div className='imgdiv'> <iframe src="https://lottie.host/?file=4833ea3d-0c60-4e15-bd24-a83db73d3643/WmwzXDVW4Y.json" className='animatedframe'></iframe></div>
      <div className='flexcenter'><p className='cardname'>CLASS</p></div>
      <p className='cardcontent'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore minus saepe </p>
      </div>
    </div>
    <div>
      <div className="card">
      <div className='imgdiv'><iframe src="https://lottie.host/?file=8835bf4b-e6ee-4c67-9aa6-7b5c96d3ea4a/v89ULJ4wJm.json" className='animatedframe'></iframe></div>
      <div className='flexcenter'><p className='cardname'>CLASS</p></div>
      <p className='cardcontent'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore minus saepe </p>
      </div>
    </div>
    
        
      </div>
    </div>
   </div>
  )
}

export default Goals