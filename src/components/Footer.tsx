import { RocketIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-800 relative bg-space-darker">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <RocketIcon className="text-cosmic-blue" />
              <h3 className="font-display text-xl font-bold">
                <span className="text-cosmic-blue">&lt;</span>
                Shakshi
                <span className="text-cosmic-blue">/&gt;</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              Computer Science student passionate about data analysis and web development.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/ShakshiKumariAgrawal" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-cosmic-blue transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/shakshiagrawal-/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-cosmic-blue transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Enhanced Quick Links Section */}
          <div className="md:col-span-1">
            <h3 className="font-display text-lg font-medium mb-5 text-white border-b border-gray-800 pb-2">
              <span className="text-cosmic-blue">✦</span> Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              <div className="col-span-1">
                <a 
                  href="#about" 
                  className="text-gray-300 hover:text-cosmic-blue transition-all flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-cosmic-blue/50 rounded-full group-hover:bg-cosmic-blue group-hover:scale-110 transition-all"></span>
                  About
                </a>
              </div>
              <div className="col-span-1">
                <a 
                  href="#skills" 
                  className="text-gray-300 hover:text-cosmic-blue transition-all flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-cosmic-blue/50 rounded-full group-hover:bg-cosmic-blue group-hover:scale-110 transition-all"></span>
                  Skills
                </a>
              </div>
              <div className="col-span-1">
                <a 
                  href="#projects" 
                  className="text-gray-300 hover:text-cosmic-blue transition-all flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-cosmic-blue/50 rounded-full group-hover:bg-cosmic-blue group-hover:scale-110 transition-all"></span>
                  Projects
                </a>
              </div>
              <div className="col-span-1">
                <a 
                  href="#certificates" 
                  className="text-gray-300 hover:text-cosmic-blue transition-all flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-cosmic-blue/50 rounded-full group-hover:bg-cosmic-blue group-hover:scale-110 transition-all"></span>
                  Certificates
                </a>
              </div>
              <div className="col-span-1">
                <a 
                  href="#contact" 
                  className="text-gray-300 hover:text-cosmic-blue transition-all flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-cosmic-blue/50 rounded-full group-hover:bg-cosmic-blue group-hover:scale-110 transition-all"></span>
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Shakshi Kumari Agrawal's Portfolio. All rights reserved.</p>
          <p className="mt-2">
            <span className="text-cosmic-blue">&#10100;</span> Designed and Built with ❤️ <span className="text-cosmic-blue">&#10101;</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;