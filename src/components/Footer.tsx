import React from 'react';
import { TowerControl as GameController, Mail, Github } from 'lucide-react';
import { SGCS_INFO } from '../utils/constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GameController className="h-6 w-6 text-blue-500" />
              <h3 className="text-xl font-bold">SGCS Release</h3>
            </div>
            <p className="text-gray-400 max-w-md">
              {SGCS_INFO.description}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/games" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Games
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href={SGCS_INFO.social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="mailto:contact@sgcs.com" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} {SGCS_INFO.name}. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2 md:mt-0">
            Founded {SGCS_INFO.founded} · Sogang University
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;