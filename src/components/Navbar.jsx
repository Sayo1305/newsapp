import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigator = useNavigate();
  return (
    <>
      <div className="w-full flex flex-wrap flex-col md:flex-row justify-center md:justify-between items-center border-b-[1px] border-b-black   h-auto p-3 bg-og">
        <div className="font-bold text-xl md:text-5xl italic">OMNI</div>
        <div className="flex justify-between items-center gap-3">
          <div className="flex justify-between items-center gap-3">
            {/* <input className="rounded-lg p-2 outline-none"  type={"text"} placeholder="Topic"></input> */}
            {/* <button className="cursor-pointer bg-black text-white p-2 border-1 rounded-xl">search</button> */}
            <nav className="p-2 text-sm font-medium cursor-pointer">
              <ul className="flex gap-5 font-semibold text-lg md:text-2xl">
                <li>About</li>
                <li>Contact</li>
                <li
                  onClick={() => {
                    navigator("/Search");
                  }}
                >
                  search
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
