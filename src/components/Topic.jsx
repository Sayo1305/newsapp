import axios from 'axios';
// import { response } from 'express';
import React, { useEffect, useState } from 'react'

const Topic = () => {
 const [data,setdata]=useState([]);
 const [subject,setsubject]=useState("business");
useEffect(()=>{
axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${subject}&apiKey=${process.env.REACT_APP_APIKEY}`).catch((err)=>{
    console.log(err);
}).then((response)=>{setdata(response.data.articles)
    console.log(response)
})
},[subject])
 
    return (
    <div>
      <div>
         <nav class="bg-white shadow-lg">
			<div class="max-w-6xl mx-auto px-4">
				<div class="flex justify-between">
					<div class="flex space-x-7">
					
						
						
						{/* <!-- Primary Navbar items --> */}
						<div class="hidden md:flex items-center space-x-20 ">
							<a  class="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Home</a>
							<a onClick={(e)=>{e.preventDefault(); setsubject('Entertainment')}} class="py-4 px-2 text-gray-500 font-semibold focus:text-green-500 transition duration-300">Entertainment</a>
							<a  class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Health</a>
							<a  class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Politics</a>
              <a  class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Business</a>
              <a class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Science</a>
              <a class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Technology</a>
              <a class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Sports</a>
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
  )
}

export default Topic
