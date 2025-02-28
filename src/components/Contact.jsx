import React from "react";
// motion
import { motion } from "framer-motion";
// varaints
import { fadeIn } from "../variants";
// toastyfy
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  //Form
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f13e2a3d-88d2-4e1a-b176-e0fde2705219");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast("successful!");
    }
  };

  return (
    <section id="contact" className="section w-full">
      <ToastContainer />
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
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12 text-[#5a2b05] font-semibold">
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
            onSubmit={onSubmit}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 p-6 items-start"
          >
            <input
              type="text"
              name="name"
              required
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-[#FE8B30] focus:bg-none transition-all"
              placeholder="Your name"
            />
            <input
              type="email"
              name="email"
              required
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-[#FE8B30] focus:bg-none transition-all"
              placeholder="Your email"
            />
            <textarea
              name="messgae"
              required
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-[#FE8B30] focus:bg-none transition-all resize-none mb-12"
              placeholder="Your message"
            ></textarea>
            <button className="btn btn-lg" type="submit">Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
