import React from "react";
import { motion} from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

/*
* Section wrapper wraps the passed components and gives it functionality to the entire react component.
* This is done by making a function which passes a function, thus bringing the two components together nested.
* */
export const SectionWrapper = (Component, idName) => function HOC () {
    return (
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={ {once: true, amount: 0.25} }
            className={`${styles.padding} max-w-7x-1 mx-auto relative z-0`}
        >
            <span className="hash-span" id={idName}> &nbsp; </span>
            <Component />
        </motion.section>
    )
}