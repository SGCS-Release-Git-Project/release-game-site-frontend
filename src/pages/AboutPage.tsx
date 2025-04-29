import React from 'react';
import AboutSection from '../components/AboutSection';
import { Github, Mail, MapPin } from 'lucide-react';
import { SGCS_INFO } from '../utils/constants';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* About Section */}
      <AboutSection />
      
      {/* Contact Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-400 text-lg">
              Interested in joining SGCS or have questions about our games? Reach out to us!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition-colors">
              <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <a href="mailto:contact@sgcs.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                contact@sgcs.com
              </a>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition-colors">
              <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <Github className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
              <a 
                href={SGCS_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                @SGCS Release
              </a>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition-colors">
              <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-400">
                Sogang University, Seoul, South Korea
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Frequently Asked Questions
            </h3>
            
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">
                  How can I join SGCS?
                </h4>
                <p className="text-gray-400">
                  We welcome new members at the beginning of each semester. Keep an eye on our website and social media for announcements about recruitment periods.
                </p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">
                  Do I need prior game development experience?
                </h4>
                <p className="text-gray-400">
                  No, we welcome members of all skill levels. We have workshops and mentoring programs to help beginners get started with game development.
                </p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">
                  What technologies do you use for game development?
                </h4>
                <p className="text-gray-400">
                  We work with a variety of technologies including C#, Unreal Engine, Unity, and other game engines depending on the project requirements and team preferences.
                </p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">
                  How often do you release new games?
                </h4>
                <p className="text-gray-400">
                  We aim to release new games each semester, but the exact schedule depends on the complexity of the projects and the team's capacity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;