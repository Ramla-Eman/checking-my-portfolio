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
import { Link as RouteLink } from "react-router-dom";

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
            className="flex-1 aboutImage bg-contain bg-no-repeat h-[640px] bg-top"
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
            <h3 className="h3 mb-4">I'm a Full-Stack Developer.</h3>
            <p className="mb-6">
              <span className="text-xl font-semibold">
                Coding meets creativity in my world of web development!
              </span>
              <br />
              I'm a full-stack JavaScript developer focused on building scalable
              and user-friendly web applications. I work with React.js, Node.js,
              Express, MongoDB and Tailwind CSS to develop clean interfaces and
              efficient backend systems. I enjoy solving real-world problems,
              improving performance, and creating smooth user experiences. 
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
                  I actively contribute to open-source and continuously learn
                  new tools and technologies. My goal is to grow as a developer,
                  work on impactful products, and build meaningful digital
                  solutions.
                </span>
              )}
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={3} /> : null}
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
              <button className="btn btn-lg">
                <RouteLink to="certifications">Certifications</RouteLink>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
