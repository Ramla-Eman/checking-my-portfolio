import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// img
import Img1 from "../assets/workImg1.jpg";
import Img2 from "../assets/workImg5.png";
import Img3 from "../assets/workImg10.png";
import { Link as LinkRouter } from "react-router-dom";

const work = () => {
  return (
    <section id="work" className="section">
      <div className="mx-auto sm:px-15 px-4">
        <div className="flex flex-col gap-x-10 lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 justify-between"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight font-semibold">
                My Latest <br /> Work
              </h2>
              <p className="max-w-sm mb-6">
                Here's how i turn languages in immersive web experience.
              </p>
              <button className="btn btn-sm"><LinkRouter to="/WorkPage">View all projects</LinkRouter></button>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/20 w-full h-full absolute z-40 transition-all duration-300 "></div>
              {/* img */}
              <img
                src={Img1}
                alt=""
                className="group-hover:scale-125 transition-all duration-300"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-300 z-50">
                <span className="text-gradient">E-commerce Website</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
              <a
                  href="https://comforty-template.vercel.app/"
                  className="text-white text-3xl"
                >
                  Comforty Template
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 "
          >
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/20 w-full h-full absolute z-40 transition-all duration-300 "></div>
              {/* img */}
              <img
                src={Img2}
                alt=""
                className="group-hover:scale-125 transition-all duration-300"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-300 z-50">
                <span className="text-gradient">Revelation</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <a
                  href="https://stuff-animal-toy-shop-template.vercel.app/"
                  className="text-white text-3xl"
                >
                  Ecommerce Stuffed Animal Toy Shop
                </a>
              </div>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/20 w-full h-full absolute z-40 transition-all duration-300 "></div>
              {/* img */}
              <img
                src={Img3}
                alt=""
                className="group-hover:scale-125 transition-all duration-300"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-300 z-50">
                <span className="text-gradient">Food Del</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <a
                  href="https://mern-stack-project1-tomato-frontend.vercel.app/"
                  className="text-white text-3xl"
                >
                  Self made Project
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default work;
