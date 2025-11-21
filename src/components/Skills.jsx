import React from "react";
// images
import Image1 from "../assets/htmlicon.png";
import Image2 from "../assets/cssicon.png";
import Image3 from "../assets/js.png";
import Image4 from "../assets/reacticon.png";
import Image5 from "../assets/tailwindcss.png";
import Image6 from "../assets/firebase.png";
import Image7 from "../assets/expressjs.png";
import Image8 from "../assets/nodejs.png";
import Image9 from "../assets/mongodb.png";
import Image10 from "../assets/nextjs.png";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Icons = [
  {
    icon: Image1,
    title: "HTML",
  },
  {
    icon: Image2,
    title: "CSS",
  },
  {
    icon: Image3,
    title: "Java Script",
  },
  {
    icon: Image4,
    title: "React JS",
  },
  {
    icon: Image5,
    title: "Tailwind CSS",
  },
  {
    icon: Image6,
    title: "Firebase",
  },
  {
    icon: Image7,
    title: "Express JS",
  },
  {
    icon: Image8,
    title: "Node JS",
  },
  {
    icon: Image9,
    title: "MongoDB",
  },
  {
    icon: Image10,
    title: "Next JS",
  }
];

const Skills = () => {
  return (
    <div id="services" className="section">
      <div className="mx-auto sm:px-15 px-4">
        <div>
          <div className="flex-1 flex flex-col lg:flex-row gap-y-10 items-center lg:gap-x-16">
            {/* text */}
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h4 className="text-[#5a2b05] text-4xl uppercase font-medium mb-2 tracking-wide">
                My Professional
              </h4>
              <h2 className="text-[45px] lg:text-[80px] leading-none mb-12 text-[#5a2b05] font-semibold">
                Background Skills
              </h2>
            </motion.div>
            {/* Icons */}
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="max-w-3xl rounded-2xl bg-white/20 lg:pb-20 p-7 flex items-center justify-center gap-x-6 flex-wrap overflow-hidden"
            >
              {Icons.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="group flex flex-col items-center justify-center gap-y-5"
                  >
                    <div className="transition-all duration-300 w-16 h-16x">
                      <img src={item.icon} alt="" />
                    </div>
                    <p className="group-hover:text-xl bg-white text-[#FE8B30] group-hover:p-2 rounded opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
