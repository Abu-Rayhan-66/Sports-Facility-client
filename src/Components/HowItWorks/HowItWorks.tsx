
import  { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaFish } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
const HowItWorks = () => {

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / docHeight;
      setScrollProgress(scrollFraction);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen py-20 px-4 relative">
      <h1 className="text-center text-4xl text-white mb-10">Roadmap</h1>
      
      <div className="relative grid grid-cols-2 gap-20">
        {/* Vertical connecting line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1">
          <motion.div
            style={{
              height: '100%',
              background: `linear-gradient(to bottom, rgba(255, 255, 255, ${scrollProgress}), rgba(0, 255, 255, ${scrollProgress}))`,
            }}
            className="h-full w-1 bg-gradient-to-b"
          />
        </div>

        {/* Mission 1 - Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative p-5 bg-gray-700 rounded-lg shadow-lg"
        >
          <div className="flex items-center mb-4">
            <div className="bg-blue-600 p-2 rounded-md text-white mr-3">
              <SiTypescript className="text-4xl" />
            </div>
            <h2 className="text-2xl font-bold text-white">Mission 1</h2>
          </div>
          <h3 className="text-xl font-semibold text-teal-400">Be a Typescript Technocrat</h3>
          <ul className="text-white mt-3 space-y-2">
            <li>Fundamentals of Typescript</li>
            <li>TypeScript In Depth</li>
            <li>Generics, Interface and Advanced types</li>
            <li>Object Oriented TypeScript</li>
          </ul>
        </motion.div>

        {/* Mission 2 - Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative p-5 bg-gray-700 rounded-lg shadow-lg"
        >
          <div className="flex items-center mb-4">
            <div className="bg-green-600 p-2 rounded-md text-white mr-3">
              <FaLeaf className="text-4xl" />
            </div>
            <h2 className="text-2xl font-bold text-white">Mission 2</h2>
          </div>
          <h3 className="text-xl font-semibold text-teal-400">Be a Mongoose Master</h3>
          <ul className="text-white mt-3 space-y-2">
            <li>Master basic & advanced query techniques</li>
            <li>Mongoose schema, static & instance methods</li>
            <li>MongoDB aggregation framework</li>
            <li>Indexing, Transactions, Concurrency handling</li>
          </ul>
        </motion.div>

        {/* Mission 3 - Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative p-5 bg-gray-700 rounded-lg shadow-lg"
        >
          <div className="flex items-center mb-4">
            <div className="bg-red-600 p-2 rounded-md text-white mr-3">
              <FaFish className="text-4xl" />
            </div>
            <h2 className="text-2xl font-bold text-white">Mission 3</h2>
          </div>
          <h3 className="text-xl font-semibold text-teal-400">Be a NoSQL Backend Brainiac with Mongoose</h3>
          <ul className="text-white mt-3 space-y-2">
            <li>Deep understanding of NoSQL databases</li>
            <li>Mongoose techniques for optimization</li>
            <li>Scaling NoSQL applications</li>
          </ul>
        </motion.div>
      </div>
    </div>
    );
};

export default HowItWorks;