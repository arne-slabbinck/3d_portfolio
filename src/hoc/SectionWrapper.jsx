import { motion } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

// since this is a wrapper, we nneed to give the component, and the idname where we can scroll to sections

// component that instantly returns an other function
const SectionWrapper = (Component, idName) => 
function HOC() {
    return (
        <motion.section
            variants={staggerContainer()}  // will animate our section
            initial="hidden"
            // TODO only activate when elements come in view 
            // https://www.framer.com/motion/use-in-view/
            whileInView="show"
            viewport={{ once: true, amout: 0.25}}  // show it once only, for 0.25 seconds
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >

            <span className="hash-span" id={idName}>
                &nbsp;
            </span>

            <Component />
        </motion.section>
    )
}

export default SectionWrapper