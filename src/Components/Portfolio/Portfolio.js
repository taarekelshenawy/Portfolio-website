

import Title from '../Title/Title';
import { motion } from "framer-motion";
import { client, urlFor } from '../../lib/sanity';
import { useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // لو مش مثبتاهم ممكن تستبدلهم بنص أو تبتكر

export default function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "project"]{
          _id,
          title,
          description,
          image,
          techStack,
          liveUrl,
          githubUrl
        }`
      )
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);


  return (
    <div className='my-56 mx-auto w-[90%]' id="portfolio">
      <Title title="Profile" />
      <div className='grid gap-8 xl:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1'>
        {projects.map((item) => {
          return (
            <motion.div
              key={item._id}
              className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between"
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 15px 30px rgba(239, 68, 68, 0.15)",
                borderColor: "#ef4444",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div>
                {/* صورة المشروع مع تأثير زووم عند الهوفر */}
                <div className="relative overflow-hidden h-56">
                  {item.image && (
                    <img
                      src={urlFor(item.image).url()}
                      alt={item.title}
                      className='w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500'
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
                </div>

                {/* محتوى الـ Card */}
                <div className='p-6'>
                  <h3 className='font-bold text-2xl text-white group-hover:text-red-500 transition-colors'>
                    {item.title}
                  </h3>
                  
                  <p className='text-sm mt-3 text-slate-400 line-clamp-3 leading-relaxed'>
                    {item.description}
                  </p>

                  {/* التقنيات المستدمة (Tech Stack) */}
                  <div className='flex gap-2 mt-5 flex-wrap'>
                    {item.techStack?.map((tech, index) => (
                      <span
                        key={index}
                        className='px-3 py-1 text-xs font-semibold rounded-full text-red-400 bg-red-500/10 border border-red-500/20'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* أزرار الروابط (Live Demo & GitHub) */}
              <div className='px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-800/60 mt-4'>
                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors'
                  >
                    <span className="underline underline-offset-4">GitHub</span>
                  </a>
                )}
                
                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center gap-2 text-sm font-bold text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl transition-colors shadow-md shadow-red-600/20'
                  >
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}






