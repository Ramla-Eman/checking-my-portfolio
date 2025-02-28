import React, { useState } from "react";
// countup
import CountUp from "react-countup";
// intersection obsever hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// varient
import { fadeIn } from "../variants";
// Link
import { Link } from "react-scroll";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const [text, setText] = useState(false);
  return (
    <div id="about" ref={ref} className="section">
      <div className="mx-auto sm:px-15 px-4">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 aboutImage bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2">About me.</h2>
            <h3 className="h3 mb-4">I'm a Front-end Developer.</h3>
            <p className="mb-6">
              <span className="text-xl font-semibold">
                Coding meets creativity in my world of web development!
              </span>
              <br />
              My name is Ramla Eman, a 15-year-old web developer passionate
              about crafting engaging digital experiences. I specialize in
              front-end and full-stack development, using React.js, Tailwind
              CSS, and Three.js to build modern, high-performance websites. With
              a keen eye for design and a love for animations, I create
              interactive and immersive user experiences.
              <span
                onClick={() => {
                  setText(!text);
                }}
                className="cursor-pointer font-semibold"
              >
                 More
              </span>
              {text && (
                <span>
                  I believe in continuous learning and pushing the boundaries of
                  web development. My goal is to transform creative ideas into
                  functional and visually stunning web applications. Let’s
                  collaborate and build something extraordinary! 🚀
                </span>
              )}
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={1} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={150} duration={3} /> : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
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
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
