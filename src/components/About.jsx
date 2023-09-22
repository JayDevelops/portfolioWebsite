import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from "framer-motion"
import { styles } from "../styles"
import { services } from "../constants"

import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc/index";

const ServiceCard = ( {index, title, icon} ) => {
  return(
      <Tilt className={"xs:w-[250px] w-full"}>
        <motion.div
            variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[1px] rounded-[20px] shadow-card"
        >
          <div
              options={{
                max: 45,
                scale: 1,
                speed: 450
              }}
              className="bg-slate-800 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col sm"
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center mx-10">{title}</h3>
          </div>

        </motion.div>
      </Tilt>
  )
}

const About = () => {
  return (
      <>
        <motion.div
            variants={textVariant()}
        >
          <p className={styles.sectionSubText}>
            Introduction
          </p>
          <h2 className={styles.sectionHeadText}>
            Overview
          </h2>
        </motion.div>

        <motion.p
            variants={fadeIn(" ", " ", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]"
        >
          Greetings! Jesus Perez is a dynamic software engineer specializing in full-stack web development and Apple Swift Xcode,
          known for my ability to optimize digital experiences and drive impactful results. Attended California State
          University of Los Angeles, bestowed a Bachelors of Science in Computer Science.
          My recent achievements include a 40% reduction in web application loading times using the MERN stack, collaborated effectively
          with cross-functional teams to modernize critical audio-visual detection models,
          optimizing user experience and boosting operational efficiency by 40% for ArmyLab corporation
          Loves using full-stack web applications such as MongoDB, ExpressJS, ReactJS, and Node.js- delivering functional
          yet beautiful made websites and Swift for optimized iDevice functionality.
          With my three plus years of experience in the industry, we can bring your ideas to life as I'm open for FreeLance work and Full Time Employment.
        </motion.p>

        <div className="mt-20 mx-10 flex flex-wrap gap-10 justify-center sm:justify-start">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service}/>
          ))}
        </div>
      </>
  )
}

export default SectionWrapper(About, "about")