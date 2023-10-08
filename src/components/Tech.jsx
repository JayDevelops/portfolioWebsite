import React from "react";
import { BallCanvas } from "./canvas/index.js";
import { SectionWrapper } from "../../hoc/index.js";
import { technologies } from "../../constants/index.js";
import { styles } from "../../styles.js";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion.js";

const Tech = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Coding Languages I Use Frequently...
        </p>
        <h2 className={styles.sectionHeadText}>Tech Stacks</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className="text-white-100 md:text-[12px] sm:text-[10px] xs:text-[9px] text-center">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
