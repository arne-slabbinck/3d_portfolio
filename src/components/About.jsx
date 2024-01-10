import React from 'react'
import { Tilt } from 'react-tilt'

import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'

const About = () => {
  return (
    // regular react fragment
    <>
      {/* function call to the text utility function we created in our motion div to animate */}
      <motion.div variants={textVariant()}>
        <p classname={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p 
      variants={fadeIn("", "", 0.1, 1)} 
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]]"
      >
        I'm a software developer with experience in TypeScript and JavaScript, 
        and expertise in frameworks like React, Node.js, and Three.js. 
        I'm a quick learner and collaborate closely with clients to create efficient, 
        scalable, and user-friendly solutions that solve real world problems. 
        Let's work together to bring your ideas to life!

      </motion.p>  

    </>
  )
}

export default About