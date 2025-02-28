import React from "react";
// motion
import { motion } from "framer-motion";
// varaints
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section id="contact" className="section w-full">
      <div className="mx-auto sm:px-15 px-4 w-full">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-[#ECE161] text-4xl uppercase font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 p-6 items-start"
          >
            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-[#FE8B30] transition-all"
              placeholder="Your name"
            />
            <input
              type="email"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-[#FE8B30] transition-all"
              placeholder="Your email"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-[#FE8B30] transition-all resize-none mb-12"
              placeholder="Your message"
            ></textarea>
            <button className="btn btn-lg">Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
