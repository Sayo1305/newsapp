import { useEffect, useRef, useState } from "react";
import React from "react";
import axios from "axios";
const Navbar = () => {

  return <>

  <div className="w-full  flex justify-between items-center border-b-[1px] border-b-black   h-auto p-3 bg-og">
      <div className="font-bold text-7xl italic">
            OMNI
      </div>
      <div className="flex justify-between items-center gap-3">
            <div className="flex justify-between items-center gap-3">
                  {/* <input className="rounded-lg p-2 outline-none"  type={"text"} placeholder="Topic"></input> */}
                  {/* <button className="cursor-pointer bg-black text-white p-2 border-1 rounded-xl">search</button> */}
                  <nav className="py-4 px-6 text-sm font-medium">
      <ul className="flex space-x-20 font-normal text-4xl italic">
      <li>About</li>
      <li>Contact</li>
      <li>Signup</li>
      </ul>
    </nav>
            </div>
      </div>
      
  </div>
  </>;
};

export default Navbar;
