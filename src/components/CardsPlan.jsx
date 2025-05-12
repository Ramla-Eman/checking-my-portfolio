import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// Cards Data for plans
const cards = [
  {
    variant: "right",
    title: "Free Plan",
    preTitle: "For Starters & Learners",
    price: "Free",
    features: [
      { text: "Basic Landing Page", available: true },
      { text: "HTML, CSS, JavaScript", available: true },
      { text: "Responsive Design", available: true },
      { text: "Limited Support", available: false },
      { text: "No API Integration", available: false },
      { text: "Delivery in 10-15 Days", available: true },
    ],
    buttonText: "Get Plan",
    badge: "Limited Features",
  },
  {
    variant: "right",
    title: "Basic Plan",
    preTitle: "For Small Businesses",
    price: "$150",
    features: [
      { text: "One-Page Website", available: true },
      { text: "HTML, CSS, JavaScript (React if needed)", available: true },
      { text: "Fully Responsive", available: true },
      { text: "Basic Animations & Effects", available: true },
      { text: "Contact Form Integration", available: true },
      { text: "Delivery in 8-10 Days", available: true },
      { text: "2 Rounds of Revisions", available: true },
    ],
    buttonText: "Get Plan",
    badge: "Budget Friendly",
  },
  {
    variant: "left",
    title: "Standard Plan",
    preTitle: "Best for Growing Startups",
    price: "$200",
    features: [
      { text: "Up to 5 Pages (Home, About, Services, etc.)", available: true },
      { text: "React.js or Next.js for Performance", available: true },
      { text: "Tailwind CSS + Custom Styling", available: true },
      { text: "API Integration (Third-Party APIs)", available: true },
      { text: "SEO Optimization", available: true },
      { text: "Mobile & Tablet Friendly", available: true },
      { text: "Delivery in 10-14 Days", available: true },
      { text: "3 Rounds of Revisions", available: true },
    ],
    buttonText: "Get Plan",
    badge: "Most Popular",
  },
  {
    variant: "left",
    title: "Premium Plan",
    preTitle: "For Advanced & Scalable Websites",
    price: "$250",
    features: [
      {
        text: "Custom Design & Development (Next.js + React.js)",
        available: true,
      },
      { text: "Dynamic Content & CMS (Sanity or Firebase)", available: true },
      { text: "E-commerce or Blog Functionality (Optional)", available: true },
      { text: "Performance Optimization & SEO-Friendly", available: true },
      {
        text: "Authentication & Secure User Login (Optional)",
        available: true,
      },
      { text: "Tailored UX/UI Experience", available: true },
      { text: "Delivery in 14-21 Days", available: true },
      { text: "5 Rounds of Revisions", available: true },
    ],
    buttonText: "Get Plan",
    badge: "Best Value",
  },
];

const CardsPlan = () => {
  return (
    <section className="section">
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        {cards.map((item, index) => (
          <motion.div
            variants={fadeIn(`${item.variant}`, 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            key={index}
            className="bg-[#ffffff25] m-3 hover:shadow-lg hover:scale-125 transition-all duration-300 rounded-xl p-8 flex flex-col gap-4 items-center hover:bg-primary/10 border-2 border-white/50 hover:z-20 group relative"
          >
            <h2 className="h3 mb-1 leading-2">{item.title}</h2>
            <p className="text-[#5a2b05]">{item.preTitle}</p>
            <div className="absolute top-0 right-0 bg-[#b936ee] text-white py-2 px-4">{item.badge}</div>
            <button className="bg-[#b936ee] group-hover:bg-[#de4983] transition-all duration-300 rounded-full w-full text-2xl py-2">
              {item.buttonText}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CardsPlan;
