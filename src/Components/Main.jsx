import React from 'react'
import './Main.css'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll';

const Main = () => {
  function scrolltoexercise(){
    window.scroll(  {top: 1400,
      // left: 100,
      behavior: 'smooth'
    });
}
  return (
    <div>
      <div className='contain-div'>
        <div className='main-head-div'>
          <h2 className='main-head'>
            MAKE YOUR BODY FIT THIS YEAR WITH US.
          </h2>
        </div>

        <hr />
        <div className='herodiv'>
          <div className='contentdiv'>
            <p className='herotagline'>
              IMPROVE YOUR FITNESS LEVEL TODAY WITH US!
            </p>
            <p className='herocontent'>
              Join the fitness group now and explore the wide range of exercises along with their animated tutorials
              and achieve your goal wth us.
            </p>
            <div className='pushbutton'>
            <button className="pushable" onClick={scrolltoexercise}>
           
              <span className="front">
                Push me
              </span>
            </button>
            </div>
          

          
          </div>
        <div className="imagediv">
        <iframe src="https://lottie.host/?file=a89ebbba-af06-4665-a23e-13d56b4b38ab/5UoOTTZq45.json" className='animated'></iframe>
        </div>


        </div>
      </div>
    </div>
  )
}

export default Main