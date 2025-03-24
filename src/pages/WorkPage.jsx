import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// import link from react-scroll
import { Link } from "react-scroll";
// img
import Img1 from "../assets/workImg1.jpg";
// maping projects
const Projects = [
  {
    img: Img1,
    title: "Title",
    preTitle: "Pre Title",
  },
  {
    img: Img1,
    title: "Title",
    preTitle: "Pre Title",
  },
];

const WorkPage = () => {
  return (
    <section>
      <div className="mx-auto sm:px-15 px-4">
        <div className="flex flex-col gap-4 items-center">
          {/* text */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="h2 leading-tight font-semibold">More Projects</h2>
          </motion.div>
          {/* projects */}
          <div className="grid lg:grid-cols-3 sm:grid-cols-2">
            {Projects.map((item, index) => (
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                key={index}
                className="group relative overflow-hidden border-2 border-white/50 rounded-xl m-3"
              >
                {/* overlay */}
                <div className="group-hover:bg-black/20 w-full h-full absolute z-40 transition-all duration-300 "></div>
                {/* img */}
                <img
                  src={item.img}
                  alt=""
                  className="group-hover:scale-125 transition-all duration-300"
                />
                {/* pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-300 z-50">
                  <span className="text-gradient">{item.title}</span>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <a
                    href="https://comforty-template.vercel.app/"
                    className="text-white text-3xl"
                  >
                    {item.preTitle}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkPage;
