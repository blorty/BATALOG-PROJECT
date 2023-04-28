import React from "react";
import { NavLink } from "react-router-dom";

function NavItem({ to, label, onChangePage }) {
    return (
        <NavLink
        exact
        to={to}
        className="block mt-4 lg:inline-block lg:mt-0 text-xl text-yellow-700 hover:text-white mx-4"
        style={{ textShadow:'-1px -1px 0 #1f2937, 1px -1px 0 #1f2937, -1px 1px 0 #1f2937, 1px 1px 0 #1f2937' }}
        activeClassName="font-bold"
        >
        {label}
        </NavLink>
    );
    }

    function NavBar() {
    return (
        <nav className="App py-4 flex justify-center">
        <div className="App flex justify-center">
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow justify-center">
            <NavItem to="/" label="HOME" />
            <NavItem to="/about" label="ABOUT" />
            <NavItem to="/history" label="HISTORY" />
            </div>
        </div>
        </nav>
    );
    }

export default NavBar;
