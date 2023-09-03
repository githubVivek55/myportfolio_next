import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from './util/motion';
import { styles } from './styles';

const SectionWrapper = (
  Component: React.JSX.Element,
  idName: string | undefined
) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(null, null)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
