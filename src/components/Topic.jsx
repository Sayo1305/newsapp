import axios from 'axios';
// import { response } from 'express';
import React, { useEffect, useState } from 'react'

const Topic = () => {
 const [data,setdata]=useState([]);
 const [subject,setsubject]=useState("business");
useEffect(()=>{
axios.get(  `https://newsapi.org/v2/top-headlines?country=in&category=${subject}&apiKey=${process.env.REACT_APP_APIKEY}`).catch((err)=>{
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
					
						
						
					
						<div className="hidden md:flex items-center space-x-20 cursor-pointer ">
							<a  className=" py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Home</a>
							<a onClick={(e)=>{e.preventDefault(); setsubject('Entertainment')}} className=" py-4 px-2 text-gray-500 font-semibold focus:text-green-500 transition duration-300">Entertainment</a>
							<a  onClick={(e)=>{e.preventDefault(); setsubject('Health')}} className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Health</a>
							<a  onClick={(e)=>{e.preventDefault(); setsubject('Politics')}}className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Politics</a>
              <a  onClick={(e)=>{e.preventDefault(); setsubject('Business')}} className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Business</a>
              <a onClick={(e)=>{e.preventDefault(); setsubject('Science')}} className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Science</a>
              <a onClick={(e)=>{e.preventDefault(); setsubject('Technology')}} className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Technology</a>
              <a onClick={(e)=>{e.preventDefault(); setsubject('Sports')}} className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Sports</a>
            </div>
					</div>
				
					
				</div>
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
