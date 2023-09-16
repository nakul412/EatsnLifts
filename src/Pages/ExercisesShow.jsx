import React, { useEffect,useLayoutEffect } from 'react'
import './ExercisesShow.css'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';




const ExercisesShow = (props) => {
  let searchButtonClicked = false;
  
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [val,setval]=useState("");
  const [selectedOption, setSelectedOption] = useState('name');
  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
  };
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value); // Update the selectedOption state with the new value
    console.log(event.target.value)
  };

    searchButtonClicked = true;
    const [exercise,setExercise]=useState([]);
    const[list,setlist]=useState([]);
    const [show,setshow]=useState(false);
    const [url,seturl]=useState("");
    const {state}=useLocation();
    const getExercises=async ()=>{
    const url =   `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${state}`;
    
    
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3a7c9f6aa5msh6eb921821fc4b00p17ea83jsn9d3a76afdb46',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };

try {
	const response = await fetch(url, options);
	const result = await response.text();
  setlist(JSON.parse(result))
  setExercise(JSON.parse(result))
 
} catch (error) {
	console.error(error);
}
    }
    useEffect(()=>{
        getExercises();
      
    },[])
    const showpic=(url)=>{
      seturl(url);
       console.log(url)
      setshow(true);

    }
   const displayexercises=(e)=>{
    let pattern=e.target.value
    setval(e.target.value)
    let arr=exercise;
   
    let newarr=[];
  // console.log(pattern)
    if(pattern===""){
      newarr=exercise
    }
   if(pattern!=""){
    for(let i=0;i<arr.length;i++){
      console.log(selectedOption)
      let ele=arr[i]
      let element=ele[selectedOption]
      console.log(element)
      console.log(pattern)

      let k=0;
      let j=0;
      while(k<pattern.length && j<element.length){
        if(pattern[k]==element[j]){
          k++;
          j++;
          if(k==pattern.length){
            newarr.push(arr[i]);
          }
        }
        else{
          break;
        }
      }
     
     
     
    }
  }
    setlist(newarr)
    console.log(newarr)

   }
    

  return (
    

  <>
  {show==true ? <div className='imagefullsize'onClick={()=>{  

    setshow(false)}}>
    
    <img src={url} alt="helllo" className='showimage'/>
    

  </div> : null}
    <div className={`execisesshowdiv  ${show ? 'blur' : null}`}>

    <div className="search-container">
      <div className={`search-icon ${showSearchInput ? 'hide-search-icon' : ''}`} onClick={toggleSearchInput}>
      <FontAwesomeIcon icon={faSearch} size="1x"  />
      </div>
      <div className={`search-input-container ${showSearchInput ? 'show-search-input' : ''}`}>
        <input type="text" className="search-input " style={{display:'inline-block'}} placeholder="Search.."
        value={val}
        onChange={displayexercises}
        />
        <select value={selectedOption} onChange={handleDropdownChange} className='dropdown-style'>
        <option value="bodyPart">By Exercise</option>
        <option value="equipment">By Equipment</option>
        <option value="target">By TargetMuscle</option>
      </select>

      </div>
    </div>
        <div className='flexbox'>
          
             {list.map((ele)=>{
                return(

                    <div className='exercisediv'>
                       
                        <div className='exerciseshowcard'>
                         <img src={ele.gifUrl} alt="hello" className='adjustsize'onClick={()=>{showpic(ele.gifUrl)}}></img>

                        
                        <p className='textcolor'>{`${ele.name}`}</p>
                        </div>
                        </div>
                  ) 
            })}
        </div>
    </div>
   
    </>
  )
}

export default ExercisesShow