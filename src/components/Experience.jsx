import React from 'react'
import { VerticalTimelineElement, VerticalTimeline } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

// import local components/files below
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

// TODO: Create component for WorkIcon which only creates the Icon on the left
const WorkIcon = ( {experience} ) => {
  return (
      <div className='flex justify-center items-center w-full h-full'>
        <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
        />
      </div>
  )
}

// TODO: Create component for each individual
const ExperienceCard = ( {experience} ) => {
  return (
      <VerticalTimelineElement
          contentStyle={{
            background: "#1E313B",
            color: "#fff"
      }}
          contentArrowStyle={{ borderRight: "7px Solid #ff533b" }}
          date={experience.date}
          iconStyle={{ background: experience.iconBg }}
          icon={ <WorkIcon experience={experience} /> }
      >

        {/* HEADER, COMPANY NAME, DATE, AND BULLET POINT CONTENT FOR ONE CARD BELOW*/}
        <div>
          <h3 className="text-white text-[24px] font-bold">
            {experience.title}
          </h3>
          <p className="text-[#C3C3C3] text-[16px] font-semibold" style={ {margin:0} }>
            {experience.company_name}
          </p>

          {/* For each card, iterate through each bullet point and give it an index ID*/}
          <ul className="mt-5 list-disc ml-5 space-y-2">
            {experience.points.map((bullet, index) => (
                <li
                    key={`experience-point-${index}`}
                    className='text-white-100 text-[14px] pl-1 tracking-wider'
                >
                  {bullet}
                </li>
            ))}
          </ul>
        </div>
      </VerticalTimelineElement>
  )
}
const Experience = () => {
  return (
      <>
        {/* Start of Experience Headline, ID using "work" for SectionWrapper*/}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            Things I've Done to Date...
          </p>
          <h2 className={styles.sectionHeadText}>
            Experience
          </h2>
        </motion.div>

        {/* Map through each experience and render using verticalTimeline component*/}
        <div className="mt-20">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
                <ExperienceCard
                    key={index}
                    experience={experience}
                />
            ))}
          </VerticalTimeline>
        </div>
      </>
  )
}

export default SectionWrapper(Experience, "work")