import React from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function About() {

    useEffect(() => {
        Aos.init({
          duration: 1000, 
          once: true,     
        });
      }, []);
  return (
    <section className="py-16 px-6 bg-gray-900 text-center my-48" id="about">
      <motion.h2
        className="text-4xl text-white font-bold mb-6 "
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-2xl text-white max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Hi, I’m <span className="font-semibold text-red-500">Tarek</span>, a
        passionate <span className="font-semibold">Frontend Developer</span> with
        a strong background in building modern, responsive, and interactive web
        applications using <span className="font-semibold">React, Tailwind CSS, and JavaScript</span>.  
        I love turning ideas into beautiful digital experiences and I’m always
        learning new technologies to improve my skills.
      </motion.p>

      <motion.div
        className="flex justify-center gap-6 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
          React
        </span>
        <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full">
          Tailwind
        </span>
        <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full">
          JavaScript
        </span>
      </motion.div>
    </section>

  )
}
