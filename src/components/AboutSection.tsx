import React from 'react';
import { Calendar, Code, Award, Users } from 'lucide-react';
import { SGCS_INFO } from '../utils/constants';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-blue-500">SGCS Release</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Learn more about Sogang University's Computer Science Club and our passion for game development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              The Home of Creative Game Developers
            </h3>
            <p className="text-gray-300 mb-6">
              {SGCS_INFO.description}
            </p>
            <p className="text-gray-300 mb-8">
              We are passionate about combining computer science principles with creative game design to build engaging experiences that are both fun and educational.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <Calendar className="w-8 h-8 text-blue-500 mb-2" />
                <h4 className="text-lg font-semibold text-white mb-1">Established</h4>
                <p className="text-gray-400">{SGCS_INFO.founded}</p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <Users className="w-8 h-8 text-blue-500 mb-2" />
                <h4 className="text-lg font-semibold text-white mb-1">Members</h4>
                <p className="text-gray-400">30+ Active Students</p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <Code className="w-8 h-8 text-blue-500 mb-2" />
                <h4 className="text-lg font-semibold text-white mb-1">Technologies</h4>
                <p className="text-gray-400">C#, Unreal Engine, Unity</p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <Award className="w-8 h-8 text-blue-500 mb-2" />
                <h4 className="text-lg font-semibold text-white mb-1">Projects</h4>
                <p className="text-gray-400">10+ Games Released</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="SGCS Team" 
              className="w-full h-96 object-cover object-center"
            />
          </div>
        </div>

        <div className="mt-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our Mission
            </h3>
            <p className="text-gray-300 text-lg">
              We aim to provide a platform for students to develop their programming skills through game development projects, fostering creativity and technical excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center transition-transform hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-blue-500" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Learn</h4>
              <p className="text-gray-400">
                Develop programming skills through hands-on game development projects
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg text-center transition-transform hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-500" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Collaborate</h4>
              <p className="text-gray-400">
                Work together with fellow students on exciting game development projects
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg text-center transition-transform hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-500" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Create</h4>
              <p className="text-gray-400">
                Build and publish games that showcase creativity and technical skills
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;