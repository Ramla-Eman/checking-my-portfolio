import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// images
import Image1 from "../assets/certificatios/certificate1.jpeg";
import Image2 from "../assets/certificatios/certificate2.png";
import Image3 from "../assets/certificatios/certificate3.jpeg";
import Image4 from "../assets/certificatios/certificate4.jpeg";
import Image5 from "../assets/certificatios/certificate5.png";
import Image6 from '../assets/certificatios/certificate6.png';
import Image7 from '../assets/certificatios/certificate7.png';

const cards = [
  {
    image: Image1,
    title: "AI Skills 4 Women",
    titleLink:
      "https://learn.founderz.com/certificado/ai-skills-4-women/bb598ba4-2235-423b-b75a-040ef8d85cbe",
    pretitle: "Founderz",
    preTitleLink: "https://founderz.com/",
    date: " Apr 2025",
  },
  {
    image: Image2,
    title: "Folio3 Ai Workshop by GDGoC-Uok",
    titleLink:
      "https://certificate.givemycertificate.com/c/dd63df7e-2546-4fd0-afd7-32c77b9a31fd",
    pretitle: "Folio3 Software",
    preTitleLink: "https://folio3.com/",
    date: " Jan 2025",
  },
  {
    image: Image4,
    title: "PROCOM'25 Competitions",
    titleLink:
      "https://procom25-certificate.vercel.app/certificates/verify/b93b05d7-be18-49f4-b36c-0417c9994ddc",
    pretitle: "PROCOM",
    preTitleLink: "https://www.procom.com.pk/",
    date: " Mar 2025",
  },
  {
    image: Image5,
    title: "Front-end Web Developer",
    pretitle: "SAMZ Technologies",
    preTitleLink: "https://www.samztechnologies.com/",
    date: "Nov 2024",
  },
  {
    image: Image3,
    title: "Women Tech Quest 2025",
    pretitle: "10Pearls",
    preTitleLink: "https://10pearls.com/",
    date: "Feb 2025",
  },
  {
    image: Image6,
    title: "FEM Hackathon 2025",
    pretitle: "SMIT (Saylani Mass IT)",
    preTitleLink: "",
    date: "April 2025",
  },
  {
    image: Image7,
    title: "Completion of Web & App Development Course",
    pretitle: "SMIT (Saylani Mass IT)",
    preTitleLink: "",
    date: "OCT 2025",
  }
];

const Certifications = () => {
  return (
    <section>
      <div className="mx-auto sm:px-15 px-4 flex flex-col gap-4 items-center">
        {/* text */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="h2 md:text-[50px] text-2xl leading-tight font-semibold">
            My Certifications
          </h2>
        </motion.div>
        <ul className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {cards.map((item, index) => (
            <li key={index} className="group relative">
              <div className="bg-white/20 p-7 rounded-2xl overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="group-hover:scale-125 group-active:scale-125 transition-all duration-300"
                />
              </div>
              <div className="p-2">
                <a
                  href={item.titleLink}
                  target="_blank"
                  className="hover:underline cursor-pointer active:underline transition-all duration-300 md:text-3xl text-2xl font-semibold"
                >
                  {item.title}
                </a>
                <div className="flex gap-2 text-2xl">
                  <p className="font-bold">Company:</p>
                  <a href={item.preTitleLink} target="_blank">
                    {item.pretitle}
                  </a>
                </div>
                <div className="flex gap-2 text-2xl">
                  <p className="font-bold">Issued:</p>
                  <p>{item.date}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
