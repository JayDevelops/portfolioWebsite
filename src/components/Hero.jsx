import {motion} from "framer-motion";
import {styles} from "../styles";
import { ComputersCanvas } from "./canvas";


const Hero = () => {
  return (
      <section className="relative w-full h-screen mx-auto">
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
          <div className="flex flex-col justify-center items-center mt-5">
          </div>

            {/* LANDING PAGE TEXT CONTENT BELOW */}
            <div>
                <h1 className={`${styles.heroHeadText} text-white pr-10 leading-tight`}>
                    Hello! I'm <span className={"text-[#ff533b]"}> Jesus Perez </span>
                </h1>
                <p className={`${styles.heroSubText} mt-2 text-white-100 pr-20`}>
                    I create dynamic fullstack websites using MERN, and make Apple Applications in Swift.
                </p>
            </div>
        </div>

          {/* 3D ANIMATED COMPUTER BELOW */}
          <ComputersCanvas />

          {/* Framer motion Scrolling Icon */}
          <div className="absolute xs:bottom-11 bottom-32 w-full flex flex-col justify-center items-center">
              <a href="#about" id="about">
                  <div className="w-[35px] h-[64px] rounded-full border-4 border-secondary flex justify-center p-2 hover:bg-amber-300 transition duration-150 hover:duration-150">
                      <motion.div
                          animate={ { y: [0, 24, 0] } }
                          transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              repeatType: 'loop'
                          }}
                          className="w-3 h-3 rounded-full bg-secondary mb-1"
                      />
                  </div>
              </a>

              <div className="flex justify-center items-center mt-2">
                  <motion.p
                      initial={{
                          scale: 1,
                          color: "#CBD5E1"
                  }}
                      animate={{
                          scale: [1, 1.1, 1],
                          color: ["#CBD5E1", "#FBBF24", "#CBD5E1"]
                  }}
                      transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: 'reverse',
                          ease: [0.42, 0, 1, 1],
                      }}
                      style={{color: "#CBD5E1"}}
                      className="text-[12px]"
                  >
                      Click Me to Scroll Down
                  </motion.p>
              </div>

          </div>
      </section>
  )
}

export default Hero