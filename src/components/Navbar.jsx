import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";

import { navLinks } from "../constants/index.js";
import { logo, menu, close } from "../assets/index.js";
import { styles } from "../styles.js";

// creates the main top navigation bar with links for our portfolio
const Navbar = () => {
  // active state will track the links of where on the page the user is at (window.height)
  const [active, setActive] = useState("");

  // toggle state will track the mobile menu, whether it's open or not (boolean value)
  const [toggle, setToggle] = useState(false);

  return (
    /* DESKTOP NAVIGATION BELOW */
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to={"/"}
          className="flex items-center gap-2"
          //  Clicking this link will take us to the top of the home page
          onClick={() => {
            setActive(" ");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt={"jesus perez logo"}
            className={"w-9 h-9 object-contain"}
          />
          <p className={"text-white text-[18px] font-bold cursor-pointer flex"}>
            Jesus &nbsp;{" "}
            <span className={"sm:block hidden"}>| FullStack Engineer </span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {/* each link will render from menu.js*/}
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-red-400" : "text-late-400"
              } hover:text-slate-100 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}> {link.title} </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Navigation Below*/}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Hamburger toggled={toggle} toggle={setToggle} duration={0.23} />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-gradient-to-r from-red-600 to-black-400 absolute top-20 right-0 mx-4 my-2 min-w-[140px} z-10 rounded-x1`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {/* each link will render from menu.js*/}
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}> {link.title} </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
