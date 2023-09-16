import {React,useState} from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCross,faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [showmenu,setshowmenu]=useState(false);
function scrolltogoal(){
   
    window.scroll(  {top: 200,
    // left: 100,
    behavior: 'smooth'
  });
}
  function scrolltoworkout(){
    window.scroll(  {top: 1400,
      // left: 100,
      behavior: 'smooth'
    });
}
function scrolltogoal1(){
  setshowmenu(!showmenu)
  window.scroll(  {top: 200,
    // left: 100,
    behavior: 'smooth'
  });
}
function scrolltoworkout1(){
  setshowmenu(!showmenu)
   window.scroll(  {top: 1500,
   // left: 100,
   behavior: 'smooth'
 });
}
const togglemenu=()=>{
  setshowmenu(!showmenu);
}

  return (
    <>
    {showmenu?<div>
      <FontAwesomeIcon icon={faBars}  className='smallhamburger' onClick={togglemenu}/>
      <div className='showsmallmenu'>
      
      
      <div className='smallli'>Home</div>
      <div className='smallli' onClick={scrolltogoal1}>Goals</div>
      <div  className='smallli' onClick={scrolltoworkout1}  >Workouts</div>
    </div>
    </div>:
        <div className='Navdiv'>
        <div className='contain'>
          <h2 className='titlename'><span className='orangecolor'>EAT'S</span > & <span className='orangecolor'>LIFT'S!</span>

          </h2>
          <div><FontAwesomeIcon icon={faBars}  className='hamburger' onClick={togglemenu}/></div>
          <ul  className='fill '><li>
            Home
          </li>
          <li onClick={scrolltogoal}> Goal</li>
          <li onClick={scrolltoworkout}>Workouts</li>
         
          </ul>
        </div>
    </div>}

    </>
  )
}

export default Navbar