import React from "react";
import { NavLink } from "react-router-dom";

function NavItem({ to, label }) {
    return (
        <NavLink
        exact
        to={to}
        className="App block mt-4 lg:inline-block lg:mt-0 text-xl text-yellow-700 hover:text-white mx-4"
        activeClassName="font-bold"
        >
        {label}
        </NavLink>
    );
    }

    function NavBar() {
    return (
        <nav className="App py-4 flex justify-center">
        <div className="flex justify-center">
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
