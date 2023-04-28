import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="py-4 flex justify-center">
        <div className="flex justify-center">
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow justify-center">
            <NavLink
                exact
                to="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-xl text-yellow-700 hover:text-white mx-4"
                activeClassName="font-bold"
            >
                HOME
            </NavLink>
            <NavLink
                to="/about"
                className="block mt-4 lg:inline-block lg:mt-0 text-xl text-yellow-700 hover:text-white mx-4"
                activeClassName="font-bold"
            >
                ABOUT
            </NavLink>
            <NavLink
                to="/history"
                className="block mt-4 lg:inline-block lg:mt-0 text-xl text-yellow-700 hover:text-white mx-4"
                activeClassName="font-bold"
            >
                HISTORY
            </NavLink>
            </div>
        </div>
        </nav>
    );
}

export default NavBar;