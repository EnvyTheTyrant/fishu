import ModeToggle from "../components/ModeToggle";
import Navbar from "../components/NavBar";
import React, { useState } from "react";
import Link from "next/link";
import FullScreenNavbar from "../components/FullScreenNavbar";

const Header = () => {
  return (
    <div className=" mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex justify-between items-center border-b-[1px] dark:border-hidden">
      <Link
        href="/"
        className=" group text-5xl font-[Reward] flex items-center -translate-y-1 cursor-pointer"
      >
        <span className="hidden group-hover:flex">Web For U.</span>
        <span className="group-hover:hidden">WFU.</span>
      </Link>
      <div className=" hidden md:flex items-center gap-6 h-full">
        <Navbar flex="row" />
        <ModeToggle />
      </div>
      <div className="md:hidden flex items-center ">
        <FullScreenNavbar />
      </div>
    </div>
  );
};

export default Header;
