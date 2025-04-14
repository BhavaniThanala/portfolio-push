// import './App.css';
// import { Header } from './components/Header';
// // import { Contact } from './components/Contact';
// import { About } from './components/About';
// // import { Projects } from './components/Projects';



// function App() {
//   return (
//     <div>
//       <Header />
//       <About/> 
//       {/* <Contact />
//       <Projects/>  */}
     
//     </div>
//   );
// }

// export default App;

// src/App.js

 import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="hero"><Header /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;

