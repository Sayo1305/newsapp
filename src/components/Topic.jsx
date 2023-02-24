import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import React, { useEffect, useState } from "react";
import Noimage from "../assets/images/no-image.png";

const Topic = () => {
  const [data, setdata] = useState([]);
  const [subject, setsubject] = useState("business");
  const [Onchange, setOnchange] = useState(false);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  useEffect(() => {
    if (Onchange === true) {
      axios
        .post(`https://news-app-backend-bignner.onrender.com/caroselnews`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(subject),
        })
        .catch((err) => {
          console.log(err);
        })
        .then((response) => {
          setdata(response.data.articles);
        });
      setOnchange(false);
    }
  }, [subject]);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("api-data2") === null)) {
      axios
        .post(`https://news-app-backend-bignner.onrender.com/caroselnews`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(subject),
        })
        .catch((err) => {
          console.log(err);
        })
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem(
              "api-data2",
              JSON.stringify(response.data.articles)
            );
            setdata(response.data.articles);
          }
        });
    }
    setdata(JSON.parse(localStorage.getItem("api-data2")));
  }, []);
  return (
    <div className="h-auto flex flex-col gap-1 p-2">
      <div>
        <div className="flex flex-wrap justify-evenly w-full rounded-md shadow-lg">
          <a className=" p-3 text-gray-500 cursor-pointer text-green-500  font-semibold ">
            Home
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              setsubject("Entertainment");
              setOnchange(true);
            }}
            className=" p-3 cursor-pointer text-gray-500 text-green-500 font-semibold"
          >
            Entertainment
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              setsubject("Health");
              setOnchange(true);
            }}
            className="p-3 cursor-pointer text-gray-500 font-semibold hover:text-green-500 transition duration-300"
          >
            Health
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              setsubject("general");
              setOnchange(true);
            }}
            className="p-3 cursor-pointer text-gray-500 font-semibold hover:text-green-500 transition duration-300"
          >
            General
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              setsubject("Business");
              setOnchange(true);
            }}
            className="p-3 cursor-pointer text-gray-500 font-semibold hover:text-green-500 transition duration-300"
          >
            Business
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              setsubject("Science");
              setOnchange(true);
            }}
            className="p-3 cursor-pointer text-gray-500 font-semibold hover:text-green-500 transition duration-300"
          >
            Science
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              setsubject("Technology");
              setOnchange(true);
            }}
            className="p-3 cursor-pointer text-gray-500 font-semibold hover:text-green-500 transition duration-300"
          >
            Technology
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              setsubject("Sports");
              setOnchange(true);
            }}
            className="p-3 cursor-pointer text-gray-500 font-semibold hover:text-green-500 transition duration-300"
          >
            Sports
          </a>
        </div>
      </div>
      <Carousel
        showThumbs={false}
        centerMode={true}
        infiniteLoop={true}
        showArrow={true}
        className="w-full md:w-3/4 h-full bg-slate-200 shadow-lg mx-auto my-0 p-2"
      >
        {data &&
          data.map((val, idx) => (
            <div
              key={idx}
              className="md:w-[500px] md:h-[500px] w-[300px] h-[300px] rounded-md bg-black mx-auto my-0 p-2"
            >
              <div className="top-0 left-0 w-full text-center font-semibold text-sm md:text-xl text-white bg-black">
                <a target={"_blank"} href={val.url}>
                  {val.title}
                </a>
              </div>
              {val.urlToImage === null ? (
                <>
                  <img
                    src={Noimage}
                    className="cursor-pointer w-full h-full bg-cover"
                    alt="pic"
                  />
                </>
              ) : (
                <img
                  src={val.urlToImage}
                  className="w-full h-full bg-cover"
                  alt="pic"
                />
              )}
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default Topic;
