import { useEffect, useRef, useState } from "react";
import React from "react";
import axios from "axios";
import trendingicon from "../assets/images/increase.png";
import refreshicon from "../assets/images/refresh.png";
import Cards from "./Cards";
import "../styles.css";
const TrendingPage = () => {
  const myref = useRef();
  const [data, setdata] = useState([]);
  const [refresh, setrefresh] = useState(false);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("api-data1") === null)) {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=in&pageSize=6&apiKey=${process.env.REACT_APP_APIKEY}`
        )
        .catch((err) => {
          console.log(err);
        })
        .then((response) => {
          console.log(response);
          localStorage.setItem(
            "api-data1",
            JSON.stringify(response.data.articles)
          );
        });
      console.log(JSON.parse(localStorage.getItem("api-data1")));
    }
    setdata(JSON.parse(localStorage.getItem("api-data1")));
  }, []);
  useEffect(() => {
    if (refresh === true) {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=in&pageSize=6&apiKey=${process.env.REACT_APP_APIKEY}`
        )
        .catch((err) => {
          console.log(err);
        })
        .then((response) => {
          console.log(response);
          localStorage.setItem(
            "api-data1",
            JSON.stringify(response.data.articles)
          );
        });
      setdata(JSON.parse(localStorage.getItem("api-data1")));
      setTimeout(() => {
        setrefresh(false);
      }, 1000);
    }
  }, [refresh]);
  return (
    <div className="p-5 flex flex-col  gap-5">
      <div className="flex gap-3 items-center">
        <img src={trendingicon} className="w-[50px] h-[50px]" alt="trend" />
        <div className="text-2xl font-semibold">trending On news App</div>

        {refresh === true ? (
          <div
            onClick={() => {
              setrefresh(!refresh);
            }}
            className="spinner-border
          animate-spin
          inline-block
          w-8
          h-8
          border-4
          rounded-full
          text-green-500"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <img
            onClick={() => {
              setrefresh(!refresh);
            }}
            src={refreshicon}
            className="w-[40px] h-[40px] cursor-pointer"
            alt="trend"
          />
        )}
      </div>
      <div
        ref={myref}
        className="flex flex-wrap gap-2 w-full md:justify-center"
      >
        {data &&
          data.map((val, idx) => (
            <div key={idx} className="flex gap-2 sm:w-full md:w-1/4">
              <div className="text-3xl text-slate-400 font-bold">
                0{idx + 1}
              </div>
              <Cards key={idx} data={val} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TrendingPage;
