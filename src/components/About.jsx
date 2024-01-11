import React from 'react'
import { Tilt } from 'react-tilt'

import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';

// Component
const ServiceCard = ({ index, title, icon }) => {
  return (

    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        // fadein from right, type spring, delay multiplied by index so it goes faster with more
        // length 0.75
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div 
          // Tilt options
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>

  )
}

const About = () => {
  return (
    // regular react fragment
    <>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p 
      variants={fadeIn("", "", 0.1, 1)} 
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a software developer with experience in TypeScript and JavaScript, 
        and expertise in frameworks like React, Node.js, and Three.js. 
        I'm a quick learner and collaborate closely with clients to create efficient, 
        scalable, and user-friendly solutions that solve real world problems. 
        Let's work together to bring your ideas to life!

      </motion.p>  

      {/* Cards */}
      {/* margin top 20      gap-10 for space between cards*/}
      <div className="mt-20 flex flex-wrap gap-10">

        {/* Loop over services */}
        {services.map((service, index) => (

          // For each service we want to render a custom service card

          // TOFIX: auto loop all attributes from services to the servicecard
          <ServiceCard key={service.title} index={index} icon={service.icon} title={service.title}/>
          //... services : spread all properties comming from the service we are currently looping over

        ))}

      </div>

    </>
  )
}

export default SectionWrapper(About, "about")