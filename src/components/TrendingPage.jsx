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
      {/* <div>
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
         */}
         <div>
         <nav class="bg-white shadow-lg">
			<div class="max-w-6xl mx-auto px-4">
				<div class="flex justify-between">
					<div class="flex space-x-7">
					
						
						
						{/* <!-- Primary Navbar items --> */}
						<div class="hidden md:flex items-center space-x-20">
							<a href="" class="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Home</a>
							<a href="" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Popular</a>
							<a href="" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">International</a>
							<a href="" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Politics</a>
              <a href="" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Business</a>
              <a href="" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Science</a>
              <a href="" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">IT</a>
            </div>
					</div>
					
					{/* <!-- Mobile menu button --> */}
					<div class="md:hidden flex items-center">
						<button class="outline-none mobile-menu-button">
						<svg class=" w-6 h-6 text-gray-500 hover:text-green-500 "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
			{/* <!-- mobile menu --> */}
			<div class="hidden mobile-menu">
				<ul class="">
					<li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Popular</a></li>
          <li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">International</a></li>
					<li><a href="#services" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Politics</a></li>
					<li><a href="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Sports</a></li>
					<li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Business</a></li>
          <li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Science</a></li>
          <li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">IT</a></li>

				</ul>
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
   <div id="testimonials">
     <div id="testimonials-carousel" class="carousel slide" data-ride="False">
     <div class="carousel-inner ">
      {
        data.map((mp  , idx)=>(
          <div class="carousel-item active ">
          <h2 class="testimonial-title">{mp.title}</h2>
          <img class="testimonial-img" src={mp.urlToImage} alt="Content-img"/>
          <em className="text-black h-2.5">{mp.content}</em>
 
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
   </div>
  );
};

export default TrendingPage;
