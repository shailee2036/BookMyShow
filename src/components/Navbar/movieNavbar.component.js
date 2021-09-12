import React from "react";
import { BiChevronRight, BiSearch, BiChevronDown, BiMenu,BiChevronLeft,BiShareAlt} from "react-icons/bi";

const NavSm = () => {
return (
<>
<div className="text-white flex items-center justify-between">
   <div>
      <h3 className="text-xl font-bold">It All Starts Here!</h3>
      <span className="text-gray-500 text-xs flex items-center">

         <BiChevronRight />
      </span>
   </div>
   <div className="w-8 h-8">
      <BiShareAlt className="w-full h-full" />
   </div>
</div>
</>
)
};

const NavLg = () => {
return (
<>
<div className="container mx-auto px-4 flex items-center justify-between">
   <div className="flex items-center w-1/2">
      <div className="w-30 h-12 px-4 p-1">
         <img
            src="https://www.vhv.rs/dpng/f/422-4222380_50-off-png.png"
            alt="logo"
            className="w-full h-full" />
      </div>
      <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
         <BiShareAlt/>
         <input type="search" className="w-full focus:outline-none" placeholder="Search for movies, events, plays, sports and activities" />
      </div>
   </div>




   <div className="flex items-center gap-3">
   <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer	">
      Bhavnagar
      <BiChevronDown />
   </span>
   <button className="bg-red-600 text-white text-sm rounded px-2 py-1">
   Sign in
   </button>
   <div className="w-8 h-8 text-white">
   <BiMenu className="w-full h-full" />
   </div>
   </div>
</div>
</>
)
};
const MovieNavbar = () => {
return (
<>
<nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative bg-navCol-800 px-4 py-2">
   <div className="md:hidden">
      {
      /*Mobile Screen*/
      <NavSm />
      }
   </div>
   <div className="hidden lg:hidden md:block">
      {
      /*Tablet Screen*/
      <NavSm />
      }
   </div>
   <div className="hidden lg:flex">
      {
      /*desktop Screen*/
      <NavLg />
      }
   </div>
</nav>
</>
)
};
export default MovieNavbar;
