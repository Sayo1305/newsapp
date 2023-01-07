import axios from "axios";
// import { response } from 'express';
import React, { useEffect, useState } from "react";

const Topic = () => {
  const [data, setdata] = useState([]);
  const [subject, setsubject] = useState("business");
  const [Onchange, setOnchange] = useState(false);
  useEffect(() => {
    if (Onchange === true) {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=in&category=${subject}&apiKey=${process.env.REACT_APP_APIKEY}`
        )
        .catch((err) => {
          console.log(err);
        })
        .then((response) => {
          setdata(response.data.articles);
          console.log(response);
        });
      setOnchange(false);
    }
  }, [subject]);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("apidata2") === null)) {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=in&category=${subject}&apiKey=${process.env.REACT_APP_APIKEY}`
        )
        .catch((err) => {
          console.log(err);
        })
        .then((response) => {
          localStorage.setItem(
            "apidata2",
            JSON.stringify(response.data.articles)
          );
          console.log(response);
        });
    }
    setdata(JSON.parse(localStorage.getItem("apidata2")));
  }, []);
  return (
    <div>
      <div>
        <nav class="bg-white shadow-lg">
          <div class="max-w-6xl mx-auto px-4">
            <div class="flex justify-between">
              <div class="flex space-x-7">
                <div className="hidden md:flex items-center space-x-20 cursor-pointer ">
                  <a className=" py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">
                    Home
                  </a>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setsubject("Entertainment");
                      setOnchange(true);
                    }}
                    className=" py-4 px-2 text-gray-500 font-semibold focus:text-green-500 transition duration-300"
                  >
                    Entertainment
                  </a>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setsubject("Health");
                      setOnchange(true);
                    }}
                    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                  >
                    Health
                  </a>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setsubject("general");
                      setOnchange(true);
                    }}
                    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                  >
                    General
                  </a>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setsubject("Business");
                      setOnchange(true);
                    }}
                    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                  >
                    Business
                  </a>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setsubject("Science");
                      setOnchange(true);
                    }}
                    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                  >
                    Science
                  </a>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setsubject("Technology");
                      setOnchange(true);
                    }}
                    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                  >
                    Technology
                  </a>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setsubject("Sports");
                      setOnchange(true);
                    }}
                    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                  >
                    Sports
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div id="testimonials">
        <div
          id="testimonials-carousel"
          className="carousel slide"
          data-ride="False"
        >
          <div className="carousel-inner h-auto">
            {data &&
              data.map((mp, idx) => (
                <div key={idx}>
                  {idx === 0 ? (
                    <div className="carousel-item active h-auto">
                      <div className="flex flex-col justify-center items-center h-auto">
                      <h2 className="testimonial-title text-4xl font-medium">{mp.title}</h2>
                      <img
                        className="w-[250px] h-[250px] rounded-md"
                        src={mp.urlToImage}
                        alt="Content-img"
                      />
                      <em className="text-black h-2.5">{mp.content}</em>
                      </div>
                    </div>
                  ) : (
                    <div className="carousel-item h-auto">
                      <div className="flex flex-col justify-center items-center h-auto">
                      <h2 className="testimonial-title text-4xl font-medium">{mp.title}</h2>
                      <img
                        className="w-[250px] h-[250px] rounded-md"
                        src={mp.urlToImage}
                        alt="Content-img"
                      />
                      <em className="text-black h-2.5">{mp.content}</em>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonials-carousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonials-carousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topic;
