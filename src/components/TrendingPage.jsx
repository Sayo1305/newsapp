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
      {/* nav bar  */}
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Navbar
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNav">
              <ul class="navbar-nav mx-lg-auto">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Popular
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Favorite
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Sports
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Politics
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Business
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Science
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    IT
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link disabled"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
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
   
     <div id="testimonials-carousel" class="carousel slide" data-ride="False">
     <div class="carousel-inner ">
      {
        data.map((mp  , idx)=>(
          <div class="carousel-item active ">
          <h2 class="testimonial-title">I no longer have to sniff other dogs for love. I've found the hottest Corgi on
            TinDog. Woof.</h2>
          <img class="testimonial-img" src={mp.urlToImage} alt="dog-profile"/>
          <em>Pebbles, New York</em>
 
        </div>
        ))
      }
     </div>
     <button class="carousel-control-prev" type="button" data-bs-target="#testimonials-carousel" data-bs-slide="prev">
       <span class="carousel-control-prev-icon"></span>
     </button>
     <button class="carousel-control-next" type="button" data-bs-target="#testimonials-carousel" data-bs-slide="next">
       <span class="carousel-control-next-icon"></span>
     </button>
   </div>

   </div>
  );
};

export default TrendingPage;
