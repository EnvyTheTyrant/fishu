import { useState, useEffect } from "react";
import ModeToggle from "./ModeToggle";
import Navbar from "./NavBar";

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 w-screen bg-white dark:bg-[#121212] transform ${
        open ? "-translate-y-0" : "-translate-y-full"
      } transition-transform duration-300 ease-in-out filter`}
    >
      <div className="absolute top-8 sm:top-10 md:top-12 lg:top-14 left-12 sm:left-24 lg:left-0">
        <ModeToggle />
      </div>
      <div className="flex flex-col justify-center items-center mt-28">
        <Navbar flex="col" />
      </div>
    </div>
  );
}

export default function FullScreenNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <MobileNav open={open} setOpen={setOpen} />
      <div className="11/12 flex justify-end items-center">
        <div
          className="group z-50 relative w-6 h-4 cursor-pointer flex-col justify-between items-center flex"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span
            className={`h-[2px] w-full bg-gray-900 dark:bg-white rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />

          <span
            className={`h-[2px] w-full bg-gray-900 dark:bg-white group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </div>
      </div>
    </nav>
  );
}
