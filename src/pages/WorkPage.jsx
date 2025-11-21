import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// img
import Img1 from "../assets/workImg4.png";
import Img2 from "../assets/workImg2.jpg";
import Img3 from "../assets/workImg6.png";
import Img4 from "../assets/workImg7.png";
import Img5 from "../assets/workImg8.png";
import Img6 from "../assets/workImg3.jpg";
import Img7 from "../assets/workImg9.png";
import Img8 from "../assets/workImg11.png";
import Img9 from "../assets/workImg12.png";
// maping projects 750px x 450px
const Projects = [
  {
    img: Img1,
    title: "Fake Store API",
    preTitle: "API Work",
    link: "https://fake-store-api-sable.vercel.app/",
  },
  {
    img: Img2,
    title: "Coffee Shop",
    preTitle: "Elza Coffee Shop",
    link: "https://elza-coffee-shop.vercel.app/",
  },
  {
    img: Img3,
    title: "Hangman Game",
    preTitle: "Game",
    link: "https://hangman-game-one-olive.vercel.app/",
  },
  {
    img: Img4,
    title: "Unique Bikes",
    preTitle: "Bikes Shop",
    link: "https://unique-bikes-landing-page.vercel.app/",
  },
  {
    img: Img5,
    title: "Portfolio",
    preTitle: "Client Work",
    link: "https://ramla-eman.github.io/Abdull-Basit-Portfolio/",
  },
  {
    img: Img6,
    title: "Portfolio",
    preTitle: "Rizwan Ahmed Portfolio",
    link: "https://ramla-eman.github.io/Creating-my-father-portfolio/",
  },
  {
    img: Img7,
    title: "Task Management",
    preTitle: "Partcipate in Hackathon",
    link: "https://fem-hack-task.vercel.app/",
  },
  {
    img: Img8,
    title: "MERN Authentication",
    preTitle: "Self Made Project",
    link: "https://mern-auth-frontend-red.vercel.app/",
  },
  {
    img: Img9,
    title: "Student Feedback App",
    preTitle: "Completion Course Project in SMIT",
    link: "https://smit-hackathonfrontend.vercel.app/",
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
                  <span className="text-gradient">{item.preTitle}</span>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-active:bottom-14 group-hover:bottom-14 transition-all duration-700 z-50">
                  <a
                    href={item.link}
                    className="text-white text-3xl"
                  >
                    {item.title}
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
