import React from "react";
import { NavLink } from "react-router-dom";
import BatGif from "../assets/batlogogif.gif"

function NavBar() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 animate-moveGradient p-6 mx-auto">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <img src={BatGif} alt="bat" className="w-full h-12" />
        </div>
        <div className="block lg:hidden">
            <button
            className="flex items-center px-3 py-2 border rounded text-orange-600 border-teal-400 hover:text-white hover:border-white"
            onClick={() => {
                // toggle navbar menu
            }}
            >
            <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow justify-center">
            <NavLink
                exact
                to="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-xl text-teal-200 hover:text-white mr-4"
                activeClassName="font-bold"
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                className="block mt-4 lg:inline-block lg:mt-0 text-xl text-teal-200 hover:text-white mr-4"
                activeClassName="font-bold"
            >
                About
            </NavLink>
            <NavLink
                to="/history"
                className="block mt-4 lg:inline-block lg:mt-0 text-xl text-teal-200 hover:text-white"
                activeClassName="font-bold"
            >
                History
            </NavLink>
            </div>
        </div>
        </nav>
    );
}


export default NavBar;
