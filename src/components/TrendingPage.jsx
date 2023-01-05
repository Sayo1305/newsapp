import { useEffect, useRef, useState } from "react";
import React from "react";
import axios from "axios";
import trendingicon from '../assets/images/trending.png';
import Cards from "./Cards";
const TrendingPage = () => {
      const myref = useRef();
      const [data, setdata] = useState([]);
      useEffect(() => {
        axios
          .get(
            `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.REACT_APP_APIKEY}`
          )
          .catch((err) => {
            console.log(err);
          })
          .then((response) => {
            console.log(response.data.articles);
            setdata(response.data.articles);
          });
      }, []);
  return (
      <div className="p-5 flex flex-col gap-5">
      <div className="flex gap-5 items-center">
            <img src={trendingicon} className="w-[50px] h-[50px]" alt="trend" />
            <div className="text-2xl font-semibold">trending On news App</div>
            
      </div>
      <div ref={myref} className="flex flex-wrap gap-5">
      {
            data.map((val ,  idx)=>(
                  <Cards key={idx} data={val}/>
            ))
      }
  </div>
  </div>
  )
}

export default TrendingPage