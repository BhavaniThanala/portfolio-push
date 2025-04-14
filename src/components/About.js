// import React from 'react'
// import './About.css'



// export const About = () => {
//   return (
//       <div className='about'>
//           <h2>About me - I'm Bhavani</h2>
//           <p>Bio - B.Tech ECE from RGUKT Nuzvidu, self-taught MERN developer </p>
//           <h2>Skills-</h2>
//           <ul className='skills-list'>
//               <li>Html</li>
//               <li>css</li>
//               <li>javascript</li>
//               <li>React</li>
//               <li>Node.js</li>
//               <li>MongoDB</li>
//           </ul>
//       </div>
//   )
// }
// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>About Me</h2>
      <ul style={{ listStyle: 'disc', textAlign: 'left', paddingLeft: '1rem' }}>
        <li>Skilled in React, Node.js, JavaScript</li>
        <li>Strong understanding of UI/UX</li>
        <li>Enthusiastic learner and team player</li>
      </ul>
    </motion.div>
  );
};

export default About;
