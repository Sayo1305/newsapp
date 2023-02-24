import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchDataCont from "./SearchDataCont";

const SearchPage = () => {
  const navigator = useNavigate();
  const [data, setdata] = useState([]);
  const [SearchClick, setSearchClick] = useState(false);
  const [searchtopic, setsearchtopic] = useState("");
  const handle_change = (e) => {
    setsearchtopic(e.target.value);
  };
  const handle_click = () => {
    setSearchClick(true);
    if (searchtopic === "") {
      alert("Enter valid search topic");
      return;
    }
    setTimeout(() => {}, 1000);
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${searchtopic}&from=2023-02-21&sortBy=publishedAt&apiKey=${process.env.REACT_APP_APIKEY}`
      )
      .catch((Err) => console.log(Err))
      .then((response) => {
        setdata(response);
        console.log(response)
        setSearchClick(false);
      });
  };
  return (
    <div className="bg-slate-200 w-full h-screen">
      <div className="w-full h-auto bg-og p-2 flex justify-between items-center">
        <div
          className="font-semibold text-xl cursor-pointer"
          onClick={() => {
            navigator("/");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            className="bi bi-arrow-return-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
            />
          </svg>
        </div>
        <div className="flex items-center">
          <input
            className="outline-none rounded-sm p-2 w-[20vw]"
            type={"text"}
            placeholder="Enter a Topic"
            onChange={handle_change}
          ></input>
          <div
            className="bg-black text-white p-2 cursor-pointer h-full text-center rounded-sm"
            onClick={handle_click}
          >
            Search
          </div>
        </div>
        <div onClick={()=>{navigator("/")}} className="cursor-pointer text-xl font-semibold">Home</div>
      </div>
      {data.length === 0 && (
        <div className="w-full text-center md:text-3xl p-2 text-emerald-700 font-semibold">
          Search Anything You want to Update Your Knowledge
        </div>
      )}
      {data && data.status === 200 && <SearchDataCont data={data} />}
    </div>
  );
};

export default SearchPage;
