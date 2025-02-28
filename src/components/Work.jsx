import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// img
import Img1 from "../assets/portfolio-img1.png";
// import Img2 from "../assets/work-img2";
// import Img3 from "../assets/work-img3";

const work = () => {
  return (
    <section id="work" className="section">
      <div className="mx-auto px-15">
        <div>
          <div>
            {/* text */}
            <div>
              <h2 className="h2 leading-tight">
                My Latest <br /> Work
              </h2>
              <p className="max-w-sm mb-16">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                nisi id maiores magni reiciendis? Earum!
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>
            {/* image */}
            <div>
              {/* overlay */}
              <div></div>
              {/* img */}
              <img src={Img1} alt="" />
              {/* pretitle */}
              <div>UI/UX Desig</div>
            </div>
          </div>
          <div>2</div>
        </div>
      </div>
    </section>
  );
};

export default work;
