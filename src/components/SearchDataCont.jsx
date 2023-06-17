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
  console.log(data)

  return (
    <div className="w-full min-h-screen relative p-2">
      {data && data.status === 200 && (
        <>
          <div className="md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4   grid justify-items-center gap-2 p-2">
            {currentPost &&
              currentPost.length !== 0 &&
              currentPost.map((val, idx) => (
                <div className="flex items-center relative bg-[#7eb9f0] shadow-md flex-col bg-cover rounded-lg w-[300px] h-[400px] p-2 gap-2" key={idx}>
                  <div> <img src={val.urlToImage} className="w-[300px] h-[180px]" alt="icon" /></div>
                  <div className="font-semibold w-fll text-justify">
                      {val.title}
                  </div>
                  <div className="text-sm">{val.description.slice(0 , 120)}....</div>
                  <div className="absolute bottom-2 rounded-md p-2 bg-[#000000] ">
                    <a href={val.url} className="text-white no-underline	" target="_blank">Learn More</a></div>
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
