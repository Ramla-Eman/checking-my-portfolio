import React from "react";
// import icons
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText, } from "react-icons/bs";
// import link from react-scroll
import { Link } from "react-scroll";

const Links = [
  {
    icon: <BiHomeAlt />,
    path: "home",
  },
  {
    icon: <BiUser />,
    path: "about",
  },
  {
    icon: <BsClipboardData />,
    path: "services",
  },
  {
    icon: <BsBriefcase />,
    path: "work",
  },
  {
    icon: <BsChatSquareText />,
    path: "contact",
  },
];

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="mx-auto sm:px-15 px-4">
        {/* nav inner */}
        <div className="w-full bg-white/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex items-center justify-between text-2xl text-white">
          {Links.map((link, index) => {
            return (
              <Link
                key={index}
                to={link.path}
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
                className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
              >
                {link.icon}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
