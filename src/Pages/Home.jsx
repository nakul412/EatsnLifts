import React from 'react'
import  './Home.css';
import Navbar from '../Components/Navbar';
import Main from '../Components/Main';
import Goals from '../Components/Goals';
import Exercises from '../Components/Exercises';
import { useEffect,useState } from 'react';
import Footer from '../Components/Footer';
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '3a7c9f6aa5msh6eb921821fc4b00p17ea83jsn9d3a76afdb46',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result); // Update the state with the fetched data
        console.log(result)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the async function to fetch data
  }, []); 
  return (
    <div className='bodydiv'>
        <Navbar/>
        <Main/>
        <Goals/>
        {console.log(data+"dhink")}
        <Exercises data={data}/>
        <Footer/>

        </div>
  )
}

export default Home