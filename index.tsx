import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Menu, X, Instagram, Facebook, Github, Linkedin, Code, Layers, Zap, Layout, Send, Mail } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  
const profileImage = "/profile.JPG";

  return (
    <div className="min-h-screen text-dark font-montserrat overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-secondary shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <a href="#" className="text-white text-2xl font-bold tracking-wider">
                LEON <span className="text-accent">NELSON</span>
              </a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-white hover:text-accent px-3 py-2 rounded-md text-sm font-semibold transition-colors">Home</a>
                <a href="#skills" className="text-white hover:text-accent px-3 py-2 rounded-md text-sm font-semibold transition-colors">Skills</a>
                <a href="#contact" className="text-white hover:text-accent px-3 py-2 rounded-md text-sm font-semibold transition-colors">Contact</a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="bg-primary p-2 rounded-md text-secondary hover:text-accent focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-secondary border-t border-primary/20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" onClick={toggleMenu} className="text-white hover:text-accent block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="#skills" onClick={toggleMenu} className="text-white hover:text-accent block px-3 py-2 rounded-md text-base font-medium">Skills</a>
              <a href="#contact" onClick={toggleMenu} className="text-white hover:text-accent block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-28 pb-20 md:pt-40 md:pb-32 px-4 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0 space-y-6">
          <div className="inline-block px-4 py-1 bg-white text-secondary rounded-full text-sm font-bold shadow-sm mb-2">
            WEB DEVELOPER
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-dark leading-tight">
            Hi, I'm <span className="text-secondary">LEON</span> NELSON
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-lg mx-auto md:mx-0 leading-relaxed">
            An emerging Full-Stack Developer with nearly one year of hands-on experience in modern web technologies. I am committed to continuous improvement, actively augmenting my practical skills by pursuing advanced studies in Software Development.
          </p>
          <div className="pt-4">
            <a 
              href="#contact" 
              className="inline-block bg-accent hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:-translate-y-1 active:translate-y-0"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10"></div>
          
          <div className="relative p-2 bg-white rounded-full shadow-2xl">
            <img 
              src={profileImage} 
              alt="Leon Nelson" 
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-secondary"
            />
            {/* Floating Badge */}
            <div className="absolute bottom-4 left-0 bg-white p-3 rounded-xl shadow-lg flex items-center gap-2 animate-bounce">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-xs font-bold text-gray-600">Open to work</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-secondary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
            <p className="mt-4 text-white/90 max-w-2xl mx-auto">
              Tools and technologies I use to bring ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* HTML */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center hover:bg-white/20 transition duration-300 border border-white/20">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 text-[#E34F26]">
                <Layout size={32} strokeWidth={2.5} />
              </div>
              <h3 className="font-bold text-lg">HTML5</h3>
              <p className="text-sm text-white/70 mt-1">Structure</p>
            </div>

            {/* CSS */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center hover:bg-white/20 transition duration-300 border border-white/20">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 text-[#1572B6]">
                <Layers size={32} strokeWidth={2.5} />
              </div>
              <h3 className="font-bold text-lg">CSS3</h3>
              <p className="text-sm text-white/70 mt-1">Styling</p>
            </div>

            {/* JavaScript */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center hover:bg-white/20 transition duration-300 border border-white/20">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 text-[#F7DF1E]">
                <Code size={32} strokeWidth={2.5} />
              </div>
              <h3 className="font-bold text-lg">JavaScript</h3>
              <p className="text-sm text-white/70 mt-1">Logic</p>
            </div>

            {/* React */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center hover:bg-white/20 transition duration-300 border border-white/20">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 text-[#61DAFB]">
                <Zap size={32} strokeWidth={2.5} />
              </div>
              <h3 className="font-bold text-lg">React</h3>
              <p className="text-sm text-white/70 mt-1">Framework</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="bg-secondary p-10 md:w-1/3 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
              <p className="text-white/80 mb-8">
                Feel free to reach out for collaborations or just a friendly hello!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-accent" />
                  <span>leon.nelson@example.com</span>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Send size={24} className="text-white" />
              </div>
            </div>
          </div>

          <div className="p-10 md:w-2/3 bg-white">
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Thanks for reaching out!"); }}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition resize-none"
                  placeholder="How can I help you?"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-accent hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">LEON NELSON</h2>
          </div>
          
          <div className="flex space-x-6 mb-8">
            <a href="https://www.instagram.com/leon.nelson.121?igsh=MWFhcTJsazNpZGFkeA==" className="bg-white/20 p-3 rounded-full hover:bg-accent transition hover:-translate-y-1">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/share/17iToHpMLi/" className="bg-white/20 p-3 rounded-full hover:bg-accent transition hover:-translate-y-1">
              <Facebook size={20} />
            </a>
            
            <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-accent transition hover:-translate-y-1">
              <Linkedin size={20} />
            </a>
          </div>
          
          <div className="text-center text-white/60 text-sm">
            <p>&copy; {new Date().getFullYear()} Leon Nelson. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
