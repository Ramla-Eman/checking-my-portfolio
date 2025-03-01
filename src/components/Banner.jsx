import React from "react";
// images
import Image from "../assets/myImage2.png";
// import icons
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// import motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Socials = [
  {
    icon: <FaGithub />,
    href: "https://github.com/Ramla-Eman",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/ramla-eman/",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/ramlaeman19/?hl=en",
  },
];

const Banner = () => {
  return (
    <div className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="mx-auto sm:px-15 px-4">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Ramla <span>Eman</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 text-white">I am a</span>
              <TypeAnimation
                sequence={["Developer", 2000, "Front-End Developer", 2000]}
                speed={50}
                className="text-[#FE8B30]"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Transforming ideas into stunning digital experiences. <br className="hidden lg:flex"/> 
              Blending creativity with code to build the future of the web.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">
                <Link
                  to="contact"
                  activeClass="active"
                  smooth={true}
                  spy={true}
                >
                  Conatct me
                </Link>
              </button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[50px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              {Socials.map((social, index) => {
                return (
                  <a key={index} href={social.href} className="cursor-pointer">
                    {social.icon}
                  </a>
                );
              })}
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="flex flex-1 max-w-[320px] -order-1 lg:order-1 lg:max-w-[482px] overflow-hidden"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
