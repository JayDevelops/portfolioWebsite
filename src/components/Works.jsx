import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';


import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc/index';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({index, name, description, tags, image, source_code_link, source_image}) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.78)}
        >
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-slate-800 p-5 rounded-2xl sm:w-[360px] w-full"
            >
                {/* Inner div here */}
                <div className="relative flex flex-grow h-full object-cover rounded-2x-1">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-2x1 md:w-[50%] md:h-[50%] lg:w-full xl:w-full"
                    />

                    {/* Link when clicked, will open in new tab*/}
                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            {/* Link to your project below */}
                            <img
                                src={source_image}
                                alt={source_image.name}
                                className="w-1/2 h-1/2 object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* PROJECT TITLE AND DESCRIPTION RENDERED BELOW*/}
                <div className="mt-5 flex-grow">
                    <h3 className="text-white font-bold text-[24px]"> {name} </h3>
                    <p className="mt-2 mt-2 text-secondary text-[12px] flex-grow"> {description} </p>
                </div>

                {/* Project Tags of Languages Below */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p key={tag.name} className={`text-[12px] ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    )
}

const Works = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Thing's I've Worked So Far...
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
            variants={fadeIn(" ", " ", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3x1 leading-[30px]"
        >
          The following projects showcase my skills and experience through examples of my work.
          Each project is briefly described with links to the code over on my GitHub, or live websites, with demos/screenshots.
          It reflects my ability to solve client's/people's problems, work with various tech stacks, collaborate with people,
          and manage projects efficiently.
        </motion.p>
      </div>

      <div className="mt-10 flex flex-wrap lg:grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
        {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} {...project} index={index}/>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Works, "")