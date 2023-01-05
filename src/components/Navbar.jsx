import { useEffect, useRef, useState } from "react";
import React from "react";
import axios from "axios";
const Navbar = () => {

  return <>

  <div className="w-full  flex justify-between items-center border-b-[1px] border-b-black   h-auto p-5 bg-pink-sp/90">
      <div className="font-bold text-2xl">
            News App
      </div>
      <div className="flex justify-between items-center gap-3">
            <div className="flex justify-between items-center gap-3">
                  <input className="rounded-lg p-2 outline-none"  type={"text"} placeholder="Topic"></input>
                  <button className="cursor-pointer bg-black text-white p-2 border-1 rounded-xl">search</button>
            </div>
      </div>
  </div>
  </>;
};

export default Navbar;
