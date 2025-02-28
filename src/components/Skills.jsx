import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { RiFirebaseFill, RiTailwindCssFill } from "react-icons/ri";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Icons = [
  {
    icon: <FaHtml5 className="group-hover:fill-[#E34F26]" />,
    title: "HTML",
  },
  {
    icon: <FaCss3 className="group-hover:fill-[#1572B6]" />,
    title: "CSS",
  },
  {
    icon: <FaJs className="group-hover:fill-[#F7DF1E]" />,
    title: "Java Script",
  },
  {
    icon: <FaReact className="group-hover:fill-[#61DAFB]" />,
    title: "React JS",
  },
  {
    icon: <RiTailwindCssFill className="group-hover:fill-[#38B2AC]" />,
    title: "Tailwind CSS",
  },
  {
    icon: <RiFirebaseFill className="group-hover:fill-[#FFCA28]" />,
    title: "Firebase",
  },
];

const Skills = () => {
  return (
    <div id="services" className="section">
      <div className="mx-auto sm:px-15 px-4">
        <div>
          {/* text */}
          <div className="flex-1 flex flex-col lg:flex-row gap-y-10 items-center lg:gap-x-16">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h4 className="text-[#FE8B30] text-2xl uppercase font-medium mb-2 tracking-wide">
                My Professional
              </h4>
              <h2 className="text-[45px] lg:text-[80px] leading-none mb-12">
                Background Skills and <br /> Accomplishments
              </h2>
            </motion.div>
            {/* Icons */}
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="rounded-2xl bg-white/20 lg:pb-20 p-7 flex items-center justify-center gap-x-6 flex-wrap overflow-hidden"
            >
              {Icons.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="group flex flex-col items-center justify-center gap-y-5"
                  >
                    <div className="text-6xl transition-all duration-300 hover:scale-125">
                      {item.icon}
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
