// import React from 'react'
// import './Header.css'

// export const Header = () => {
//     return (
//         <>
           
//             <div className='header'>
//                 <h1>Bhavani Thanala</h1>
                
            
//                 <nav>
//                     <ul className='.nav-list'>
                        
//                         <li><a href='#About'>About</a></li>
//                         <li><a href='#Contact'>Contact</a></li>
//                         <li><a href='#Projects'>Projects</a></li>
//                     </ul>
//                 </nav>
//             </div>
        
//         </>
      
import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 style={{ fontSize: '3rem' }}>Hi, I'm Bhavani 👋</h1>
      <p style={{ fontSize: '1.5rem' }}>I'm a Full-Stack Developer</p>
    </motion.div>
  );
};

export default Header;
