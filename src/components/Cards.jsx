import React, { useEffect, useState } from "react";

const Cards = ({ data }) => {
  const [DataDate, setDatadate] = useState("");
  useEffect(() => {
    var d = new Date(data.publishedAt);
    setDatadate(d.toUTCString());
  }, []);
  return (
    <div className="shadow-xl w-full flex flex-col gap-3 h-auto p-2 rounded-lg">
      <div className="flex items-center gap-2">
        <div>
          <img
            className="w-[30px] h-[30px] rounded-full"
            src={`https://ui-avatars.com/api/?name=${data.author}`}
            alt=""
          />
        </div>
        <div className="text-[10px]">{data.author}</div>
      </div>
      <div className="text-[12px] font-semibold ">{data.title}</div>
      <div className="flex justify-between items-center">
        <div className="text-[10px] font-semibold ">{DataDate}</div>
        <a  target={"_blank"} href={data.url} className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg "
            width="16"
            height="16"
            fill-color="currentColor"
            className="bi bi-box-arrow-up-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
            />
            <path
              fillRule="evenodd"
              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Cards;
