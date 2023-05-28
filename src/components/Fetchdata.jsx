import React, { useEffect, useState } from 'react'
import axios from "axios"
import '../styles/FetchdataStyle.css'



const Fetchdata = () => {

const [Data, setData] = useState("");



    const fetchdata = async () => {
await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=3d9562e23c5a4ef5bea0749f77b6b5c3").then((res)=> setData(res.data.articles));
    };
    useEffect(() => {
        fetchdata();
    },[]);
  return (
    <div className='container'>
   <h3> TOP HEADLINES</h3>
   <div>
   {Data
    ? Data.map((items,index) =>(
        <>
        <div >
        <h5>{items.title}</h5>
        <img src = {items.urlToImage}alt='/' className='imog'/>
        <p>{items.description}</p>
        <a href={items.url} target='blank'> View More</a>
        </div>
        </> )): "Loading..."}</div>
    </div>
  )
}

export default Fetchdata