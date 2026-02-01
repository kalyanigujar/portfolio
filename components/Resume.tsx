
import React from 'react';
import { Download, Briefcase, GraduationCap, Award, CheckCircle, Star, FileText } from 'lucide-react';

const Resume: React.FC = () => {
  const certifications = [
    { title: "Full Stack Web Development (MERN)", issuer: "Axiom Tech Guru Pvt. Ltd.", year: "2024" },
    { title: "Software Testing (Manual + Basics of Automation)", issuer: "Professional Training", year: "2024" },
    { title: "Data Analysis (Power BI & Tableau)", issuer: "Self-Paced Learning", year: "2023" },
    { title: "UI/UX Design & Prototyping", issuer: "Figma Academy", year: "2023" },
  ];

  const handleDownload = () => {
    // Creating a placeholder resume content to simulate a real PDF download
    const resumeText = `
      KALYANI GUJAR
      Amravati, Maharashtra | kalyanigujar532@gmail.com | +91-9730839467
      LinkedIn: linkedin.com/in/kalyani-gujar | GitHub: github.com/kalyanigujar

      PROFESSIONAL SUMMARY
      Ambitious and detail-oriented Full Stack Developer (MERN) and Software Tester with hands-on experience in developing and testing dynamic web applications.

      EXPERIENCE
      Axiom Tech Guru Pvt. Ltd. — Full Stack Developer (MERN)
      Jan 2024 – Present | Nagpur, Maharashtra
      - Develop and maintain responsive web applications using the MERN stack.
      - Build and integrate RESTful APIs for seamless communication.
      - Conduct manual and functional testing using JIRA and HP ALM.

      PROJECTS
      - Online Food Ordering System (MERN Stack)
      - Student Management System (Software Testing)
      - Student Learning Website (Bootstrap)

      TECHNICAL SKILLS
      React.js, Node.js, Express.js, MongoDB, MySQL, JIRA, HP ALM, Postman, Git, Figma, Power BI, Tableau.

      EDUCATION
      - BSC – Bachelor of Computer Science (2023 – Present)
      - XII – Intermediate (2018 – 2020)
    `;
    
    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Kalyani_Gujar_Resume.txt'); // In production, this would be a .pdf
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <section className="py-24 pt-32 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
            Professional <span className="text-yellow-500">Resume</span>
          </h2>
          <div className="w-20 h-1.5 bg-yellow-500 mx-auto mb-8 rounded-full"></div>
          
          <div className="flex flex-col items-center gap-4">
            <button 
              onClick={handleDownload}
              className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-500 text-black font-black uppercase tracking-widest rounded-full hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-xl shadow-yellow-500/20"
            >
              <Download size={20} />
              Download Full CV
            </button>
            <p className="text-zinc-500 text-xs italic">Get a copy of my professional background</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Experience */}
          <div className="space-y-10">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <Briefcase className="text-yellow-500" />
              Work Experience
            </h3>
            
            <div className="relative pl-8 border-l-2 border-zinc-800 space-y-12">
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-yellow-500 border-4 border-black"></div>
                <div>
                  <span className="text-yellow-500 text-xs font-black uppercase tracking-widest bg-yellow-500/10 px-2 py-1 rounded mb-2 inline-block">Jan 2024 – Present</span>
                  <h4 className="text-xl font-bold text-white mb-1">Full Stack Developer (MERN)</h4>
                  <p className="text-zinc-400 text-sm mb-4">Axiom Tech Guru Pvt. Ltd. • Nagpur, MH</p>
                  <ul className="text-zinc-500 text-sm space-y-3 list-disc list-inside leading-relaxed">
                    <li>Develop and maintain responsive web apps using <span className="text-zinc-300">MERN stack</span>.</li>
                    <li>Build and integrate <span className="text-zinc-300">RESTful APIs</span> for seamless communication.</li>
                    <li>Implement secure authentication and optimize <span className="text-zinc-300">database queries</span>.</li>
                    <li>Conduct manual and functional testing using <span className="text-zinc-300">JIRA and HP ALM</span>.</li>
                    <li>Collaborate in <span className="text-zinc-300">Agile sprints</span> and participate in code reviews.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-10">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <GraduationCap className="text-yellow-500" />
              Education
            </h3>
            
            <div className="relative pl-8 border-l-2 border-zinc-800 space-y-12">
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-yellow-500 border-4 border-black"></div>
                <div>
                  <span className="text-yellow-500 text-xs font-black uppercase tracking-widest bg-yellow-500/10 px-2 py-1 rounded mb-2 inline-block">Jun 2023 – Present</span>
                  <h4 className="text-xl font-bold text-white mb-1">BSC – Bachelor of Computer Science</h4>
                  <p className="text-zinc-400 text-sm mb-2">Amravati, Maharashtra</p>
                  <p className="text-zinc-500 text-sm italic">Pursuing advanced computer science principles and software engineering.</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-zinc-700 border-4 border-black"></div>
                <div>
                  <span className="text-zinc-500 text-xs font-black uppercase tracking-widest bg-zinc-800 px-2 py-1 rounded mb-2 inline-block">2018 – 2020</span>
                  <h4 className="text-xl font-bold text-white mb-1">XII – Intermediate</h4>
                  <p className="text-zinc-400 text-sm mb-2">Sitabai sangai School, Anjangaon</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
             <h3 className="text-2xl font-bold flex items-center gap-3">
              <Award className="text-yellow-500" />
              Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <div key={i} className="glass p-5 rounded-2xl border border-zinc-800 hover:border-yellow-500/30 transition-all">
                  <CheckCircle size={16} className="text-yellow-500 mb-3" />
                  <h4 className="text-xs font-bold text-white mb-1 leading-tight">{cert.title}</h4>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <Star className="text-yellow-500" />
              Achievements
            </h3>
            <div className="space-y-4">
              <div className="glass p-6 rounded-3xl border border-zinc-800 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 flex-shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">2nd Rank in Mathematics Olympiad</h4>
                  <p className="text-sm text-zinc-500">State Level Recognition of excellence in analytics and problem solving.</p>
                </div>
              </div>

              <div className="glass p-6 rounded-3xl border border-zinc-800 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-zinc-400 flex-shrink-0">
                  <FileText size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Valid Passport Holder</h4>
                  <p className="text-sm text-zinc-500">Ready for global opportunities and relocation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
