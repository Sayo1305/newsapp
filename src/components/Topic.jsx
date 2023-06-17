import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useEffect, useState } from "react";
import Noimage from "../assets/images/no-image.png";

const Topic = () => {
  const [data, setdata] = useState([]);
  const [subject, setsubject] = useState("business");
  const [Onchange, setOnchange] = useState(false);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
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
            className={`p-3 cursor-pointer text-gray-500 text-green-500 font-semibold 
            ${subject === "Entertainment" ? "bg-[#EF8172] text-white rounded-md" : ""}`}
          >
            Entertainment
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              setsubject("Health");
              setOnchange(true);
            }}
                       className={`p-3 cursor-pointer text-gray-500 text-green-500 font-semibold 
            ${subject === "Health" ? "bg-[#EF8172] text-white rounded-md" : ""}`}
          >
            Health
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              setsubject("general");
              setOnchange(true);
            }}
                       className={`p-3 cursor-pointer text-gray-500 text-green-500 font-semibold 
            ${subject === "general" ? "bg-[#EF8172] text-white rounded-md" : ""}`}
          >
            General
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              setsubject("Business");
              setOnchange(true);
            }}
                       className={`p-3 cursor-pointer text-gray-500 text-green-500 font-semibold 
            ${subject === "Business" ? "bg-[#EF8172] text-white rounded-md" : ""}`}
          >
            Business
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              setsubject("Science");
              setOnchange(true);
            }}
                       className={`p-3 cursor-pointer text-gray-500 text-green-500 font-semibold 
            ${subject === "Science" ? "bg-[#EF8172] text-white rounded-md" : ""}`}
          >
            Science
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              setsubject("Technology");
              setOnchange(true);
            }}
                       className={`p-3 cursor-pointer text-gray-500 text-green-500 font-semibold 
            ${subject === "Technology" ? "bg-[#EF8172] text-white rounded-md" : ""}`}
          >
            Technology
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              setsubject("Sports");
              setOnchange(true);
            }}
                       className={`p-3 cursor-pointer text-gray-500 text-green-500 font-semibold 
            ${subject === "Sports" ? "bg-[#EF8172] text-white rounded-md" : ""}`}
          >
            Sports
          </a>
        </div>
      </div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {data &&
          data.map((val, idx) => (
            <div
              key={idx}
              className="md:w-3/4 bg-cover relative h-[300px] rounded-md bg-black mx-auto my-0"
            >
              <div className="top-0 left-0 w-full absolute text-center font-semibold text-sm text-white bg-black">
                <a target={"_blank"} href={val.url}>
                  {val.title}
                </a>
              </div>
              {val.urlToImage === null ? (
                <>
                  <img
                    src={Noimage}
                    className="cursor-pointer w-full h-full "
                    alt="pic"
                  />
                </>
              ) : (
                <img src={val.urlToImage} className="w-full h-full" alt="pic" />
              )}
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default Topic;
