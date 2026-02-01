
import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Online Food Ordering System",
    type: "Full Stack",
    description: "A comprehensive food delivery solution featuring restaurant browsing, real-time cart updates, secure checkout, and an admin dashboard. Built with the MERN stack.",
    tech: ["Node.js", "Express", "MongoDB", "JavaScript"],
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    link: "https://github.com/kalyanigujar532-droid/online-food-ordering"
  },
  {
    title: "Student Management System",
    type: "Software Testing Focus",
    description: "Enterprise-grade student record management focusing on rigorous functional and regression testing. Includes enrollment modules and report generation.",
    tech: ["Quality Assurance", "SQL", "Functional Testing"],
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
    link: "https://github.com/kalyanigujar532-droid/student-management-system"
  },
  {
    title: "Student Learning Website",
    type: "UI/UX Development",
    description: "Responsive educational portal with course directories, study material downloads, and interactive quizzes. Mobile-first design architecture.",
    tech: ["Bootstrap", "UI/UX", "Modern CSS"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    link: "https://github.com/kalyanigujar/learning-website.git"
  }
];

const Projects: React.FC = () => {
  return (
    <section className="py-24 pt-32 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
            Featured <span className="text-yellow-500">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-yellow-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-zinc-400">
            Selected work that demonstrates technical proficiency and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group glass rounded-3xl overflow-hidden flex flex-col hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 bg-yellow-500 rounded-full text-black transform scale-0 group-hover:scale-100 transition-transform delay-100"
                  >
                    <Github size={24} />
                  </a>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-yellow-500 text-black text-[10px] font-black uppercase rounded-full tracking-widest">
                    {project.type}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] text-zinc-500 border border-zinc-800 px-2 py-0.5 rounded uppercase font-bold">
                      {t}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-yellow-500 font-bold text-sm group/link"
                >
                  View Details
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-zinc-400 mb-8 italic">More open-source contributions available on GitHub.</p>
          <a 
            href="https://github.com/kalyanigujar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 glass text-white font-bold rounded-full hover:bg-zinc-900 transition-all border border-zinc-800"
          >
            <Github size={20} />
            Explore GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
