import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// const ExperienceCard is equal to a react areal function where we get experience
// as the first and only prop

//!!! if we wrap in curly braces they expect a return statement!
//normal bracers just render!!!

const ExperienceCard = ({ experience}) => (

  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff'}}
    contentArrowStyle={{ borderRight: '7px solid #232631'}}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img 
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-whtie text-[24px] font-bold">{experience.title}</h3>
    </div>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    // empty react segment
    <>

      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      {/* Vertical Timeline */}

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {/* Loop over experiences, where we get an experience and an index */}
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>

    </>
    
  )
}

export default SectionWrapper(Experience, "work")