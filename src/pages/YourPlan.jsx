import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// Cards Component
import CardsPlan from "../components/CardsPlan";

const YourPlan = () => {
  return (
    <div className="mx-auto sm:px-15 px-4">
      <div className="flex flex-col gap-4 items-center">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col items-center"
        >
          <h2 className="h2 leading-tight font-semibold">Choose Your Plan</h2>
          <p>
            Here's how i turn languages in immersive web experience.
          </p>
        </motion.div>
        <CardsPlan />
      </div>
    </div>
  );
};

export default YourPlan;
