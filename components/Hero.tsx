
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, FileText, Code, ShieldCheck, Sparkles, Github, Linkedin, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[15%] left-[-5%] w-[35%] h-[35%] bg-yellow-600/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[45%] h-[45%] bg-zinc-800/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* LEFT SIDE: SEO-Rich Content */}
          <div className="flex-[1.3] text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-black uppercase tracking-widest mb-6">
              <Sparkles size={14} className="animate-spin-slow" /> Available for Global Opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black mb-6 tracking-tighter leading-[1] text-white">
              CRAFTING <span className="text-gradient">CODE.</span> <br />
              ENSURING <span className="text-zinc-600">QUALITY.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed font-light mx-auto lg:mx-0">
              I am <span className="text-white font-bold uppercase tracking-wider">Kalyani Gujar</span>, 
              a professional <span className="text-zinc-100 font-semibold italic">Full Stack Developer</span> and 
              <span className="text-zinc-100 font-semibold italic"> Software Quality Assurance specialist</span> based in Nagpur. 
              I specialize in the <span className="text-yellow-500/80 underline decoration-yellow-500/30 underline-offset-4">MERN Stack</span> and rigorous testing methodologies to build 
              products that are both functional and flawless.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center mb-16">
              <Link
                to="/projects"
                className="group w-full sm:w-auto px-10 py-5 bg-yellow-500 text-black font-black uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-2xl shadow-yellow-500/30"
              >
                View Projects
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/resume"
                className="w-full sm:w-auto px-10 py-5 glass text-white font-black uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all border border-zinc-800 hover:border-yellow-500/30"
              >
                <FileText size={20} className="text-yellow-500" />
                Resume PDF
              </Link>
            </div>

            {/* Technical Highlights / Trust Badges */}
            <div className="grid grid-cols-2 sm:flex items-center justify-center lg:justify-start gap-6 pt-8 border-t border-zinc-900">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-yellow-500">
                   <Code size={18} />
                 </div>
                 <div className="text-left">
                   <p className="text-[9px] uppercase tracking-widest text-zinc-500 font-black mb-0.5">Development</p>
                   <p className="text-xs font-bold text-zinc-200">MERN Stack</p>
                 </div>
               </div>
               
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-yellow-500">
                   <ShieldCheck size={18} />
                 </div>
                 <div className="text-left">
                   <p className="text-[9px] uppercase tracking-widest text-zinc-500 font-black mb-0.5">Assurance</p>
                   <p className="text-xs font-bold text-zinc-200">QA Specialist</p>
                 </div>
               </div>

               <div className="hidden sm:flex items-center gap-4 ml-auto">
                 <a href="https://linkedin.com/in/kalyani-gujar" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 rounded-xl text-zinc-400 hover:text-white hover:border-zinc-700 border border-transparent transition-all">
                   <Linkedin size={20} />
                 </a>
                 <a href="https://github.com/kalyanigujar" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 rounded-xl text-zinc-400 hover:text-white hover:border-zinc-700 border border-transparent transition-all">
                   <Github size={20} />
                 </a>
               </div>
            </div>
          </div>

          {/* RIGHT SIDE: Professional Image */}
          <div className="flex-1 order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Soft glow background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
              
              {/* Profile Wrapper */}
              <div className="relative z-10 w-[280px] sm:w-[350px] lg:w-[400px] aspect-[4/5] bg-zinc-900 rounded-[2.5rem] overflow-hidden border-2 border-zinc-800/80 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.7)] transform group-hover:-translate-y-2 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                  alt="Kalyani Gujar - Professional Developer Nagpur" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                
                {/* Floating Skill Badge */}
                <div className="absolute top-6 right-6 p-4 glass rounded-3xl border border-yellow-500/30 flex items-center gap-3 backdrop-blur-xl animate-bounce-slow">
                   <div className="w-10 h-10 bg-yellow-500 rounded-2xl flex items-center justify-center text-black">
                      <Terminal size={20} />
                   </div>
                   <div className="hidden sm:block">
                      <p className="text-[10px] font-black text-yellow-600 uppercase tracking-tighter leading-none">Status</p>
                      <p className="text-white font-bold text-sm">Active Pro</p>
                   </div>
                </div>
              </div>

              {/* Decorative Geometric Elements */}
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-yellow-500/10 rounded-full blur-xl z-0"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-zinc-800/30 rounded-full -z-10 animate-spin-slow"></div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3 opacity-20">
        <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 font-bold">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-yellow-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
