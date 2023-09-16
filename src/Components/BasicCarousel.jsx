import React from 'react';
import './BasicCarousel.css'
import $ from 'jquery'
import "slick-carousel/slick/slick.css";
import { useEffect,useState } from 'react';
import "slick-carousel/slick/slick-theme.css";
import {useNavigate} from "react-router-dom"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; 
// import $ from 'jquery'; 

const BasicCarousel = ({data}) => {
let exercises=[]
  const navigate = useNavigate();
   const pictures=[
    "https://thumbs.gfycat.com/DifficultHotBoto-max-1mb.gif",
    "https://i.pinimg.com/originals/37/1a/d4/371ad4137ee381e717e5e65113ffe4b9.gif",
    "https://cdn.dribbble.com/users/398490/screenshots/2039177/bench_gif.gif",
    "https://post.healthline.com/wp-content/uploads/2020/06/400x400_Forearm-Exercises_to_Do_at_the_Gym_or_at_Home_Palms_Up_Wrist_Curl.gif",
    "https://thumbs.gfycat.com/WellinformedLateButterfly-size_restricted.gif",
    "https://healthclue.eu/wp-content/uploads/2019/03/neck-stretches-gif.gif",
    "https://th.bing.com/th/id/OIP.wAOdASmdsp8szZ8o5dkoiAAAAA?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/R.ad9d418d578c592b55cf9a683bb5ae33?rik=cfZyx29%2fK4oXIA&riu=http%3a%2f%2fwww.sport-fitness-advisor.com%2fimages%2fdumbbell_exercises_concentration_curls.gif&ehk=GTyxRPUomqU7WnJTN1WS0ABHhNQQxIN0DyyEhgNRVmY%3d&risl=&pid=ImgRaw&r=0",
    "https://dungcutheduc.vn/images/leg-press.gif",
    "https://i.pinimg.com/originals/8c/3f/4f/8c3f4f740e0443f005e1044b5faf4a18.gif",

   ]
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
 

   const getExercises=async(ele)=>{
    navigate('/showexercises', { state: ele });
    
   }
   
    
      return (
        <Carousel responsive={responsive} className='height-carousel'>
  {data.map((ele,idx)=>{
    //  { console.log(pictures[idx])}
    const elecap=ele.toUpperCase();
    return(
    
      <div className="card conatiner">
      <div className='imgdiv2 card2 exercisecard2'> <img src={pictures[idx]} alt="x"className='animatedframe2 ' ></img></div>
      <div className='flexcenter2'><p className='cardname2'>{elecap}</p></div>
   <button class="button" onClick={()=>{getExercises(ele)}}> <span>
   ➜</span></button>
      </div>
    )
  })}
  

</Carousel>
      );
};

export default BasicCarousel;