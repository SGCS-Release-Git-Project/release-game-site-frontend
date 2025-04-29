import React, { useEffect, useState } from 'react';
import { ChevronRight, TowerControl as GameController } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Game } from '../types';

interface HeroSectionProps {
  featuredGame: Game;
}

const HeroSection: React.FC<HeroSectionProps> = ({ featuredGame }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={featuredGame.thumbnail} 
          alt="히어로 배경" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/70"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        <div className="particle-container">
          {[...Array(20)].map((_, index) => (
            <div 
              key={index} 
              className="particle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 5 + 1}px`,
                height: `${Math.random() * 5 + 1}px`,
                animationDuration: `${Math.random() * 10 + 5}s`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: Math.random() * 0.5 + 0.25
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <span 
            className={`inline-flex items-center py-1 px-3 rounded-full bg-blue-600/30 text-blue-300 text-sm font-medium mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <GameController className="w-4 h-4 mr-2" />
            SGCS Release 게임 쇼케이스
          </span>
          
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-1000 delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            서강대학교 컴퓨터공학과 학술동아리의 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">흥미진진한 게임</span>을 경험해보세요
          </h1>
          
          <p 
            className={`text-lg text-gray-300 mb-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            SGCS Release 멤버들이 만든 플래시 게임 컬렉션을 즐겨보세요. 우리의 대표작인 {featuredGame.title}부터 시작해보세요 - 당신의 반사 신경과 전략을 시험하는 흥미진진한 모험이 기다립니다.
          </p>
          
          <div 
            className={`flex flex-wrap gap-4 transition-all duration-1000 delay-450 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Link 
              to={`/game/${featuredGame.id}`} 
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              대표작 플레이하기
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
            
            <Link 
              to="/games" 
              className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              모든 게임 보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;