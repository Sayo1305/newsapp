import { useEffect, useRef, useState } from "react";
import React from "react";
import axios from "axios";
import trendingicon from "../assets/images/trending.png";
import Cards from "./Cards";
import "../styles.css";
const TrendingPage = () => {
  const myref = useRef();
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&pageSize=6&apiKey=${process.env.REACT_APP_APIKEY}`
      )
      .catch((err) => {
        console.log(err);
      })
      .then((response) => {
        console.log(response);
        setdata(response.data.articles);
      });
  }, []);
  return (
    <div className="p-5 flex flex-col gap-5">
      <div className="flex gap-5 items-center">
        <img src={trendingicon} className="w-[50px] h-[50px]" alt="trend" />
        <div className="text-2xl font-semibold">trending On news App</div>
      </div>
     


      <div ref={myref} className="flex flex-wrap gap-2 w-full md:justify-center">
        {data.map((val, idx) => (
          <>
            <div className="flex gap-2 sm:w-full md:w-1/4">
              <div className="text-3xl text-slate-400 font-bold">0{idx+1}</div>
              <Cards key={idx} data={val} />
            </div>
          </>
        ))}
      </div>
   
   </div>
  );
};

export default TrendingPage;
