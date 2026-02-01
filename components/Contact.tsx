
import React from 'react';
import { MapPin, Phone, Mail, Send, Github, Linkedin, Twitter, Youtube, Instagram, ExternalLink, ClipboardList, FileText } from 'lucide-react';

const ContactCard = ({ icon: Icon, title, content, onClick, link }: any) => {
  const CardContent = (
    <div className="glass p-8 rounded-3xl text-center flex flex-col items-center group hover:border-yellow-500/50 transition-all cursor-pointer h-full">
      <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center text-yellow-500 mb-6 group-hover:bg-yellow-500 group-hover:text-black transition-all">
        <Icon size={24} />
      </div>
      <h4 className="text-zinc-500 text-xs font-black uppercase tracking-widest mb-2">{title}</h4>
      <p className="text-lg font-bold text-white group-hover:text-yellow-500 transition-colors">{content}</p>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
        {CardContent}
      </a>
    );
  }

  return (
    <div onClick={onClick} className="h-full">
      {CardContent}
    </div>
  );
};

const Contact: React.FC = () => {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScyLpWp6zI8Hn77T5qH4e9-k_1m0Y0N0C0_X_X_X/viewform?usp=sf_link";

  const handleResumeDownload = () => {
    const resumeText = "KALYANI GUJAR - Full Stack Developer & Software Tester\nEmail: kalyanigujar532@gmail.com\nPhone: +91-9730839467\nLocation: Nagpur, MH";
    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Kalyani_Gujar_Resume.txt');
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <section className="py-24 pt-32 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
            Get In <span className="text-yellow-500">Touch</span>
          </h2>
          <div className="w-20 h-1.5 bg-yellow-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-zinc-400">
            Ready to collaborate or hire? Use the options below to reach me instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-24">
          <ContactCard 
            icon={MapPin} 
            title="Location" 
            content="Nagpur, India" 
          />
          <ContactCard 
            icon={Phone} 
            title="Call Me" 
            content="+91 9730839467" 
            link="tel:+919730839467"
          />
          <ContactCard 
            icon={Mail} 
            title="Email" 
            content="kalyanigujar532@gmail.com" 
            link="mailto:kalyanigujar532@gmail.com"
          />
          <ContactCard 
            icon={ClipboardList} 
            title="Inquiry" 
            content="Hire Me" 
            link={googleFormUrl}
          />
          <ContactCard 
            icon={FileText} 
            title="Resume" 
            content="Get PDF" 
            onClick={handleResumeDownload}
          />
        </div>

        <div className="max-w-3xl mx-auto glass p-10 md:p-16 rounded-[40px] text-center border-yellow-500/20">
          <ClipboardList className="mx-auto text-yellow-500 mb-6" size={48} />
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Project Inquiry</h3>
          <p className="text-zinc-400 mb-10 leading-relaxed">
            I'm currently seeking roles as a <strong>Full Stack Developer or QA Engineer</strong>. 
            Share your project details or job description via my Google Form.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <a 
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-yellow-500 text-black font-black uppercase tracking-widest rounded-full hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-xl shadow-yellow-500/10"
            >
              <ExternalLink size={20} />
              Submit Inquiry Form
            </a>
          </div>

          <div className="mt-16">
            <h5 className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-8">Professional Networks</h5>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: Linkedin, link: "https://linkedin.com/in/kalyani-gujar" },
                { icon: Github, link: "https://github.com/kalyanigujar" },
                { icon: Twitter, link: "#" },
                { icon: Instagram, link: "https://www.instagram.com/kalyanigujar2003/" },
                { icon: Youtube, link: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-full flex items-center justify-center text-zinc-400 hover:text-yellow-500 hover:border-yellow-500/50 transition-all"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
