// import React from 'react'
// // import './Conatct.css'
// import './Contact.css'


// export const Contact = () => {
//   return (
//       <>
//           <section id='contact'>
//               <h2>contact details</h2>
              
//           </section>


//       </>
//   )
// }
// src/components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
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

export default Contact;
