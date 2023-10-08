import React from "react";
import {
  VerticalTimelineElement,
  VerticalTimeline,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

// import local components/files below
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles.js";
import { experiences } from "../constants/index.js";
import { SectionWrapper } from "../hoc/index.js";
import { fadeIn, textVariant } from "../utils/motion.js";
import Tilt from "react-parallax-tilt";

// TODO: Create component for WorkIcon which only creates the Icon on the left
const WorkIcon = ({ experience }) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <img
        src={experience.icon}
        alt={experience.company_name}
        className="w-[60%] h-[60%] object-contain"
      />
    </div>
  );
};

// TODO: Create component for each individual
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1E313B",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px Solid #ff533b" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={<WorkIcon experience={experience} />}
    >
      {/* HEADER, COMPANY NAME, DATE, AND BULLET POINT CONTENT FOR ONE CARD BELOW*/}
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-[#C3C3C3] text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>

        {/* For each card, iterate through each bullet point and give it an index ID*/}
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((bullet, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};
const Experience = () => {
  //  Retrieve the resume below
  const resumeFile = "jesusPerezResume2023.pdf";

  // Download resume onClick handler
  const downloadResume = () => {
    fetch(resumeFile).then((res) => {
      res.blob().then((blob) => {
        // Create the fileURL
        const fileURL = window.URL.createObjectURL(blob);

        //  set props
        let aLink = document.createElement("a");
        aLink.href = fileURL;
        aLink.download = resumeFile;
        aLink.click();
      });
    });
  };

  return (
    <>
      {/* Start of Experience Headline, ID using "work" for SectionWrapper*/}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Things I've Done to Date...</p>
        <h2 className={styles.sectionHeadText}>Experience</h2>
      </motion.div>

      {/* Map through each experience and render using verticalTimeline component*/}
      <div className="mt-20">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>

      <motion.div variants={textVariant()} className="mt-20">
        <p className={styles.sectionSubText}>My resume in it's full glory...</p>
        <h2 className={styles.sectionHeadText}>Resume</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn(" ", " ", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3x1 leading-[30px]"
        >
          My timeline only details some brief moments of my career life, below
          is a button that does one thing which is downloading a PDF version of
          my Resume. My resume is always up to date on my website, LinkedIn, and
          other job sites when I apply. Please take a look and let me know for
          any feedback you may stumble upon :)
        </motion.p>
      </div>

      <div className="mt-20 flex justify-center items-center justify-center">
        <motion.div variants={textVariant()} className="flex flex-col gap-8">
          <Tilt className="xs:w-[180px] w-full">
            <motion.button
              variants={fadeIn("right", "spring", 0.6, 0.75)}
              className="bg-gray-700 rounded-md text-white font-bold px-6 py-3 relative before:w-full before:h-full before:scale-x-[1.15] before:scale-y-[1.35] before:absolute before:top-[50%] before:left-[50%] before:-z-10 before:translate-x-[-50%] before:translate-y-[-50%] before:from-rose-500 before:via-purple-500 before:bg-gradient-to-br before:rounded-md hover:bg-gray-600 transition-all duration-300"
              onClick={downloadResume}
            >
              <span className="text-[14px] text-white-200">
                Download My Resume
              </span>
            </motion.button>
          </Tilt>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
