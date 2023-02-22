import React, { useState } from "react";
import ReactPaginate from "react-paginate";
const SearchDataCont = ({ data }) => {
  const [number, setNumber] = useState(1);
  const [postPerPage] = useState(10);
  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost =
    data.status === 200 ? data.data.articles.slice(firstPost, lastPost) : null;
  const PageCount = Math.ceil(data.data.articles.length / postPerPage);
  const ChangePage = ({ selected }) => {
    setNumber(selected);
  };

  return (
    <div className="w-full h-auto relative p-2">
      {data && data.status === 200 && (
        <>
          <div className="flex flex-col items-start gap-1 p-2">
            {currentPost &&
              currentPost.length !== 0 &&
              currentPost.map((val, idx) => (
                <div className="flex items-center p-2 gap-2" key={idx}>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-cursor-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                    </svg>
                  </div>
                  <div className="font-semibold">
                    <a href={val.url} target={"_blank"} className="">
                      {val.title}
                    </a>
                  </div>
                </div>
              ))}
            {currentPost.length === 0 && (
              <div>May be you click on 1 page it's not working</div>
            )}
          </div>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={PageCount}
            onPageChange={ChangePage}
            containerClassName={"paginationBttns"}
            activeClassName={"paginationActive"}
            disableInitialCallback={true}
            initialPage={1}
          ></ReactPaginate>
        </>
      )}
      {data.status !== 200 && (
        <div className="text-center w-full text-red-600 text-2xl font-bold">
          Kindly search correct word OR API does not working
        </div>
      )}
    </div>
  );
};

export default SearchDataCont;
