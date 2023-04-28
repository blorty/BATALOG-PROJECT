import React from "react";
import { NavLink } from "react-router-dom";

function NavItem({ to, label, onChangePage }) {
    return (
        <NavLink
        exact
        to={to}
        className="block mt-4 lg:inline-block lg:mt-0 text-xl text-yellow-700 hover:text-white mx-4"
        activeClassName="font-bold"
        >
        {label}
        </NavLink>
    );
    }

    function NavBar() {
    return (
        <nav className="py-4 flex justify-center">
        <div className="flex justify-center">
            <button
            className="flex items-center px-3 py-2 border rounded text-orange-600 white-400 hover:text-white hover:border-white"
            onClick={() => {
                // toggle navbar menu open/closed
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
            <NavItem to="/" label="Home" />
            <NavItem to="/about" label="About" />
            <NavItem to="/history" label="History" />
            </div>
        </div>
        </nav>
    );
    }

export default NavBar;
